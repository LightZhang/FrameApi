const { user } = require('../base/baseService');
module.exports = {
  'POST api/users': async (ctx, next) => {
    let id = ctx.request.query.id;
    let where = {
      id: id
    };
    const user = await user.findOne(where);
    ctx.json({
      users: user
    });
  }
};
