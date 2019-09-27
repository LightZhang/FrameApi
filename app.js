const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const verificationContent = require('./middleware/verificationContent');
const registerRouter = require('./middleware/registerRouter');

const app = new Koa();

// 格式化body
// app.use(bodyParser());

// //验证权限
// app.use(verificationContent.init);

// 注册路由
app.use(registerRouter());

app.listen(3000);
console.log(' \n 监听：', 'http://localhost:3000');
