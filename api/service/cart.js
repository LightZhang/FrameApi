
const { cart, goods } = require('../base/baseModel');
module.exports = {
    /**
     * 获取购物车中的数据
     * @returns {Promise.<{cartList: *, cartTotal: {goodsCount: number, goodsAmount: number, checkedGoodsCount: number, checkedGoodsAmount: number}}>}
     */
    async getCart() {
        const cartList = await cart.findAll({ user_id: think.userId, session_id: 1 });
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
            cartItem.list_pic_url = (await goods.findAll({ where: { id: cartItem.goods_id }, attributes: ['list_pic_url'] })).map(p => {
                return p.list_pic_url
            });
        }

        return {
            cartList: cartList,
            cartTotal: {
                goodsCount: goodsCount,
                goodsAmount: goodsAmount,
                checkedGoodsCount: checkedGoodsCount,
                checkedGoodsAmount: checkedGoodsAmount
            }
        };
    }


};
