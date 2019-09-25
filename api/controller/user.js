module.exports = {
  'POST api/users': async (ctx, next) => {
    let id = ctx.request.query.id;
    let where = {
      id: id
    };
    const user = await model.User.findOne(where);
    ctx.json({
      users: user
    });
  },

  'GET /api/userList': async (ctx, next) => {
    let offset = ctx.request.query.offset || 0;
    let limit = ctx.request.query.limit || 10;

    ctx.json({
      users: user
    });
  },

  'POST /api/users': async (ctx, next) => {
    let userParam = {
      name: ctx.request.body.name,
      password: ctx.request.body.password
    };
    let user = await model.User.create(userParam);
    ctx.json(user);
  },

  // 用户注册
  'POST /api/users/register': async (ctx, next) => {
    let name = ctx.request.body.name;
    const user = await model.User.findOne({
      where: {
        name: name
      }
    });

    if (user) {
      let resObj = { code: '1001', msg: '用户已存在!' };
      ctx.json(resObj);
    } else {
      let userParam = {
        name: name,
        password: md5.getMd5(ctx.request.body.password)
      };
      let newUser = await model.User.create(userParam);
      if (newUser) {
        let resObj = { code: '200', msg: `${name}注册成功!` };
        ctx.json(resObj);
      }
    }
  },

  // 用户登录
  'POST /api/users/login': async (ctx, next) => {
    let name = ctx.request.body.name;
    const user = await model.User.findOne({
      where: {
        name: name
      }
    });

    if (!user) {
      let resObj = { code: '1002', msg: '用户不存在!' };
      ctx.json(resObj);
    } else {
      if (user.password !== md5.getMd5(ctx.request.body.password)) {
        let resObj = { code: '1003', msg: '密码错误!' };
        ctx.json(resObj);
      } else {
        // token处理：token存储在redis且返回
        let token = `${user.id}-${Date.now()}`;
        let tokenObj = { userId: user.id, expires: config.expires, creatTime: Date.now() };
        ctx.redisClient.hmset(token, tokenObj);
        let resObj = { code: '200', token: token };
        ctx.json(resObj);
      }
    }
  }
};
