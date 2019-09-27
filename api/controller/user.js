const { user } = require('../base/baseService');
debugger;
module.exports = {
  'GET /api/users': async (ctx, next) => {
    console.log(2222);
    debugger;
    let id = ctx.request.query.id;
    let where = {
      id: id
    };
    debugger;

    const user2 = await user.findOne(where);
    ctx.json({
      users: user2
    });
  }
};
