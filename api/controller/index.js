const { user } = require('../base/baseModel');
module.exports = {
    'GET /index/index': async (ctx, next) => {
        const banner = await this.model('ad').where({ ad_position_id: 1 }).select();
        const channel = await this.model('channel').order({ sort_order: 'asc' }).select();
        const newGoods = await this.model('goods').field(['id', 'name', 'list_pic_url', 'retail_price']).where({ is_new: 1 }).limit(4).select();
        const hotGoods = await this.model('goods').field(['id', 'name', 'list_pic_url', 'retail_price', 'goods_brief']).where({ is_hot: 1 }).limit(3).select();
        const brandList = await this.model('brand').where({ is_new: 1 }).order({ new_sort_order: 'asc' }).limit(4).select();
        const topicList = await this.model('topic').limit(3).select();

        const curUser = await user.findOne(where);
        ctx.json({
            banner: banner,
            channel: channel,
            newGoodsList: newGoods,
            hotGoodsList: hotGoods,
            brandList: brandList,
            topicList: topicList,
            categoryList: newCategoryList
        });

    }
};
