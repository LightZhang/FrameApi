const { user } = require('../base/baseService');
module.exports = {
  'GET /api/users': async (ctx, next) => {
    let id = ctx.request.query.id;
    let where = {
      id: id
    };

    const curUser = await user.findOne(where);
    ctx.json({
      users: curUser
    });
  }
};
