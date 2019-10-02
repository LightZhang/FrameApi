const { user } = require('../base/baseModel');
module.exports = {
  'GET /users': async (ctx, next) => {
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
