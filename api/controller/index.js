
const { ad, channel, goods, brand, topic, category, op } = require('../base/baseModel');
module.exports = {
    'GET /index/index': async (ctx, next) => {
        const banner = await ad.findAll({ where: { ad_position_id: 1 } });
        const channels = await channel.findAll({ order: [['sort_order', 'asc']] });
        const newGoods = await goods.findAll({ where: { is_new: 1 }, limit: 4 });
        const hotGoods = await goods.findAll({ where: { is_hot: 1 }, limit: 3 });
        const brandList = await brand.findAll({ where: { is_new: 1 }, order: [['new_sort_order', 'asc']], limit: 4 });
        const topicList = await topic.findAll({ limit: 3 });


        const categoryList = await category.findAll({ where: { parent_id: 0, name: { [op.ne]: '推荐' } } });
        const newCategoryList = [];
        for (const categoryItem of categoryList) {
            const childCategoryIds = await category.findAll({ where: { parent_id: categoryItem.id }, limit: 100, attributes: ['id'] }).map(p => p.id);
            const categoryGoods = await goods.findAll({ where: { category_id: { [op.in]: childCategoryIds } }, limit: 7, attributes: ['id', 'name', 'list_pic_url', 'retail_price'] });
            newCategoryList.push({
                id: categoryItem.id,
                name: categoryItem.name,
                goodsList: categoryGoods
            });
        }

        ctx.success({
            banner: banner,
            channel: channels,
            newGoodsList: newGoods,
            hotGoodsList: hotGoods,
            brandList: brandList,
            topicList: topicList,
            categoryList: newCategoryList
        });

    }
};
