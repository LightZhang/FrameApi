const { user } = require('../base/baseModel');
debugger;
module.exports = {
  async findOne(ctx, next) {
    let offset = ctx.request.query.offset || 0;
    let limit = ctx.request.query.limit || 10;
    const user2 = await user.findOne({
      offset,
      limit,
      order: [['createdAt', 'desc'], ['id', 'desc']]
    });
    return user2;
  },

  async userList(ctx, next) {
    let offset = ctx.request.query.offset || 0;
    let limit = ctx.request.query.limit || 10;

    ctx.json({
      users: user
    });
  },

  async users(ctx, next) {
    let userParam = {
      name: ctx.request.body.name,
      password: ctx.request.body.password
    };
    let user = await user.create(userParam);
    ctx.json(user);
  },

  // 用户注册
  async register(ctx, next) {
    let name = ctx.request.body.name;
    const user = await user.findOne({
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
      let newUser = await user.create(userParam);
      if (newUser) {
        let resObj = { code: '200', msg: `${name}注册成功!` };
        ctx.json(resObj);
      }
    }
  },

  // 用户登录
  async login(ctx, next) {
    let name = ctx.request.body.name;
    const user = await user.findOne({
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
