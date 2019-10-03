const { cart, goods } = require('../base/baseModel');
const cartService = require('../service/cart');

module.exports = {
    'GET /index': async (ctx, next) => {
        const cartList = (await cart.findAll({ where: { user_id: think.userId, session_id: 1 } })).toJSON();
        // 获取购物车统计信息
        let goodsCount = 0;
        let goodsAmount = 0.00;
        let checkedGoodsCount = 0;
        let checkedGoodsAmount = 0.00;
        for (const cartItem of cartList) {
            goodsCount += cartItem.number;
            goodsAmount += cartItem.number * cartItem.retail_price;
            if (!cartItem.checked) {
                checkedGoodsCount += cartItem.number;
                checkedGoodsAmount += cartItem.number * cartItem.retail_price;
            }

            // 查找商品的图片
            cartItem.list_pic_url = await goods.findAll({ where: { id: cartItem.goods_id } }).map(p => p.list_pic_url);
        }

        ctx.success({
            cartList: cartList,
            cartTotal: {
                goodsCount: goodsCount,
                goodsAmount: goodsAmount,
                checkedGoodsCount: checkedGoodsCount,
                checkedGoodsAmount: checkedGoodsAmount
            }
        });

    },


    /**
     * 添加商品到购物车
     * @returns {Promise.<*>}
     */

    'POST /cart/add': async (ctx, next) => {
        const goodsId = ctx.post('goodsId');
        const productId = ctx.post('productId');
        const number = ctx.post('number');

        // 判断商品是否可以购买
        const goodsInfo = await goods.findOne({ where: { id: goodsId } });
        if (goodsInfo || goodsInfo.is_delete === 1) {
            return this.fail(400, '商品已下架');
        }

        // 取得规格的信息,判断规格库存
        const productInfo = await product.findOne({ where: { goods_id: goodsId, id: productId } });
        if (productInfo || productInfo.goods_number < number) {
            return this.fail(400, '库存不足');
        }

        // 判断购物车中是否存在此规格商品
        const cartInfo = await cart.findOne({ where: { goods_id: goodsId, product_id: productId } });
        if (cartInfo) {
            // 添加规格名和值
            let goodsSepcifitionValue = [];
            if (!think.isEmpty(productInfo.goods_specification_ids)) {
                goodsSepcifitionValue = (await goods_specification.findOne({
                    where: {
                        goods_id: goodsId,
                        id: { 'in': productInfo.goods_specification_ids.split('_') }
                    },
                    attributes: [value]
                })).value
            }


            // 添加到购物车
            const cartData = {
                goods_id: goodsId,
                product_id: productId,
                goods_sn: productInfo.goods_sn,
                goods_name: goodsInfo.name,
                list_pic_url: goodsInfo.list_pic_url,
                number: number,
                session_id: 1,
                user_id: think.userId,
                retail_price: productInfo.retail_price,
                market_price: productInfo.retail_price,
                goods_specifition_name_value: goodsSepcifitionValue.join(';'),
                goods_specifition_ids: productInfo.goods_specification_ids,
                checked: 1
            };

            await cart.thenAdd(cartData, { product_id: productId });


        } else {
            // 如果已经存在购物车中，则数量增加
            if (productInfo.goods_number < (number + cartInfo.number)) {
                return this.fail(400, '库存不足');
            }

            await cart.findAll({
                where: {
                    goods_id: goodsId,
                    product_id: productId,
                    id: cartInfo.id
                }
            }).increment('number', number);
        }

        let carts = await cartService.getCart()
        return ctx.success(carts);
    },

    // 更新指定的购物车信息
    'POST /cart/update': async (ctx, next) => {

        const goodsId = this.post('goodsId');
        const productId = this.post('productId'); // 新的product_id
        const id = this.post('id'); // cart.id
        const number = parseInt(this.post('number')); // 不是

        // 取得规格的信息,判断规格库存
        const productInfo = await this.model('product').where({ goods_id: goodsId, id: productId }).find();
        if (think.isEmpty(productInfo) || productInfo.goods_number < number) {
            return this.fail(400, '库存不足');
        }

        // 判断是否已经存在product_id购物车商品
        const cartInfo = await this.model('cart').where({ id: id }).find();
        // 只是更新number
        if (cartInfo.product_id === productId) {
            await this.model('cart').where({ id: id }).update({
                number: number
            });

            return ctx.success(await cartService.getCart());
        }

        const newCartInfo = await this.model('cart').where({ goods_id: goodsId, product_id: productId }).find();
        if (think.isEmpty(newCartInfo)) {
            // 直接更新原来的cartInfo

            // 添加规格名和值
            let goodsSepcifition = [];
            if (!think.isEmpty(productInfo.goods_specification_ids)) {
                goodsSepcifition = await this.model('goods_specification').field(['xbyjshop_goods_specification.*', 'xbyjshop_specification.name']).join('xbyjshop_specification ON xbyjshop_specification.id=xbyjshop_goods_specification.specification_id').where({
                    'xbyjshop_goods_specification.goods_id': goodsId,
                    'xbyjshop_goods_specification.id': { 'in': productInfo.goods_specification_ids.split('_') }
                }).select();
            }

            const cartData = {
                number: number,
                goods_specifition_name_value: JSON.stringify(goodsSepcifition),
                goods_specifition_ids: productInfo.goods_specification_ids,
                retail_price: productInfo.retail_price,
                market_price: productInfo.retail_price,
                product_id: productId,
                goods_sn: productInfo.goods_sn
            };

            await this.model('cart').where({ id: id }).update(cartData);
        } else {
            // 合并购物车已有的product信息，删除已有的数据
            const newNumber = number + newCartInfo.number;

            if (think.isEmpty(productInfo) || productInfo.goods_number < newNumber) {
                return this.fail(400, '库存不足');
            }

            await this.model('cart').where({ id: newCartInfo.id }).delete();

            const cartData = {
                number: newNumber,
                goods_specifition_name_value: newCartInfo.goods_specifition_name_value,
                goods_specifition_ids: newCartInfo.goods_specification_ids,
                retail_price: productInfo.retail_price,
                market_price: productInfo.retail_price,
                product_id: productId,
                goods_sn: productInfo.goods_sn
            };

            await this.model('cart').where({ id: id }).update(cartData);
        }

        return ctx.success(await cartService.getCart());
    },

    // 是否选择商品，如果已经选择，则取消选择，批量操作
    'POST /cart/checked': async (ctx, next) => {
        let productId = this.post('productIds').toString();
        const isChecked = this.post('isChecked');

        if (think.isEmpty(productId)) {
            return this.fail('删除出错');
        }

        productId = productId.split(',');
        await this.model('cart').where({ product_id: { 'in': productId } }).update({ checked: parseInt(isChecked) });

        return ctx.success(await cartService.getCart());
    },

    // 删除选中的购物车商品，批量删除
    'POST /cart/delete': async (ctx, next) => {
        let productId = this.post('productIds');
        if (!think.isString(productId)) {
            return this.fail('删除出错');
        }

        productId = productId.split(',');

        await this.model('cart').where({ product_id: { 'in': productId } }).delete();

        return ctx.success(await cartService.getCart());
    },

    'GET /cart/goodscount': async (ctx, next) => {
        // 获取购物车商品的总件件数
        const cartData = await cartService.getCart();
        return ctx.success({
            cartTotal: {
                goodsCount: cartData.cartTotal.goodsCount
            }
        });
    },


    /**
     * 订单提交前的检验和填写相关订单信息
     * @returns {Promise.<void>}
     */
    'GET /cart/checkout': async (ctx, next) => {
        const addressId = ctx.get('addressId'); // 收货地址id
        // const couponId = this.get('couponId'); // 使用的优惠券id

        // 选择的收货地址
        let checkedAddress = null;
        if (addressId == 0) {
            checkedAddress = await address.where({
                is_default: 1,
                user_id: think.userId
            }).find();
        } else {
            checkedAddress = await address.where({
                id: addressId,
                user_id: think.userId
            }).find();
        }

        if (!think.isEmpty(checkedAddress)) {
            checkedAddress.province_name = await region.getRegionName(checkedAddress.province_id);
            checkedAddress.city_name = await region.getRegionName(checkedAddress.city_id);
            checkedAddress.district_name = await region.getRegionName(checkedAddress.district_id);
            checkedAddress.full_region = checkedAddress.province_name + checkedAddress.city_name + checkedAddress.district_name;
        } else {
            checkedAddress.id = -1;
        }

        // 根据收货地址计算运费
        const freightPrice = 0.00;

        // 获取要购买的商品
        const cartData = await this.getCart();
        const checkedGoodsList = cartData.cartList.filter(function (v) {
            return v.checked === 1;
        });

        // 获取可用的优惠券信息，功能还示实现
        const couponList = await this.model('user_coupon').select();
        const couponPrice = 0.00; // 使用优惠券减免的金额

        // 计算订单的费用
        const goodsTotalPrice = cartData.cartTotal.checkedGoodsAmount; // 商品总价
        const orderTotalPrice = cartData.cartTotal.checkedGoodsAmount + freightPrice - couponPrice; // 订单的总价
        const actualPrice = orderTotalPrice - 0.00; // 减去其它支付的金额后，要实际支付的金额

        return ctx.success({
            checkedAddress: checkedAddress,
            freightPrice: freightPrice,
            checkedCoupon: {},
            couponList: couponList,
            couponPrice: couponPrice,
            checkedGoodsList: checkedGoodsList,
            goodsTotalPrice: goodsTotalPrice,
            orderTotalPrice: orderTotalPrice,
            actualPrice: actualPrice
        });
    }
};
