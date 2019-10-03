const { collect } = require('../base/baseModel');

module.exports = {
    'GET /collect/list': async (ctx, next) => {
        const typeId = ctx.get('typeId');

        const list = await collect
            .field(['c.*', 'g.name', 'g.list_pic_url', 'g.goods_brief', 'g.retail_price'])
            .alias('c')
            .join({
                table: 'goods',
                join: 'left',
                as: 'g',
                on: ['c.value_id', 'g.id']
            }).where({ user_id: think.userId, type_id: parseInt(typeId) }).countSelect();

        return ctx.success(list);
    },

    'POST /collect/addordelete': async (ctx, next) => {
        const typeId = ctx.get('typeId');
        const valueId = ctx.get('valueId');

        const collect = await collect.where({ type_id: typeId, value_id: valueId, user_id: think.userId }).find();
        let collectRes = null;
        let handleType = 'add';
        if (think.isEmpty(collect)) {
            // 添加收藏
            collectRes = await collect.add({
                type_id: typeId,
                value_id: valueId,
                user_id: think.userId,
                add_time: parseInt(new Date().getTime() / 1000)
            });
        } else {
            // 取消收藏
            collectRes = await collect.where({ id: collect.id }).delete();
            handleType = 'delete';
        }

        if (collectRes > 0) {
            return this.success({ type: handleType });
        }

        return ctx.fail('操作失败');
    }
};
