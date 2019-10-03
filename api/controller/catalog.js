
const { category, op } = require('../base/baseModel');
module.exports = {
    'GET /catalog/index': async (ctx, next) => {

        const categoryId = ctx.body.id;


        const data = await category.findAll({ limit: 10, where: { parent_id: 0 } });

        let currentCategory = null;
        if (categoryId) {
            currentCategory = await category.findOne({ where: { 'id': categoryId } });
        }

        if (!currentCategory) {
            currentCategory = data[0];
        }

        // 获取子分类数据
        if (currentCategory && currentCategory.id) {
            currentCategory.subCategoryList = await category.findAll({ where: { 'parent_id': currentCategory.id } });
        }

        return ctx.success({
            categoryList: data,
            currentCategory: currentCategory
        });
    },
    'GET /catalog/current': async (ctx, next) => {
        const categoryId = ctx.body.id;
        let currentCategory = null;
        if (categoryId) {
            currentCategory = (await category.findOne({ where: { 'id': categoryId } })).toJSON();
        }
        // 获取子分类数据
        if (currentCategory && currentCategory.id) {
            currentCategory['subCategoryList'] = await category.findAll({ where: { 'parent_id': currentCategory.id } });
        }

        return ctx.success({
            currentCategory: currentCategory
        });

    }

}