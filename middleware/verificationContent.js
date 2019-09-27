const { isTokenValid } = require('../tool/common');
module.exports = {
  init: pathPrefix => {
    pathPrefix = pathPrefix || '/api/';
    return async (ctx, next) => {
      if (ctx.request.path.startsWith(pathPrefix)) {
        console.log(`Process API ${ctx.request.method} ${ctx.request.url}...`);

        //返回自定义code
        ctx.json = (data, code, message) => {
          ctx.response.type = 'application/json';
          data.code = code;
          data.message = message;
          ctx.response.body = data;
        };

        // 成功请求
        ctx.success = data => {
          ctx.json(data, 1, '请求成功！');
        };

        // 失败请求
        ctx.fali = data => {
          ctx.json(data, -1, '请求失败！');
        };

        // 登录注册不需要验证token
        // if (ctx.request.url === '/api/users/login' || ctx.request.url === '/api/users/register') {
        // } else {
        //   // 其他接口需要登录验证
        //   let token = ctx.request.header.autoToken;

        //   if (!token) {
        //     ctx.response.status = 401;
        //     ctx.response.type = 'application/json';
        //     ctx.response.body = {
        //       code: 401,
        //       message: 'need login!'
        //     };

        //     return;
        //   } else {
        //     ctx.response.type = 'application/json';
        //     ctx.response.body = data;
        //   }
        // }

        await next();
        // try {
        //   await next();
        // } catch (e) {
        //   console.log('Process API error...');
        //   ctx.response.status = 400;
        //   ctx.response.type = 'application/json';
        //   ctx.response.body = {
        //     code: e.code || 'internal:unknown_error',
        //     message: e.message || ''
        //   };
        // }
      } else {
        await next();
      }
    };
  }
};
