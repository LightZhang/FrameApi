const db = require('../../middleware/db');
module.exports = db.defineModel('user_income', {
  // 用户代码
  user_id: db.STRING(30),

  // 收件人
  receiver: db.STRING(200),

  // 手机号码
  phone: db.STRING(30),

  // 地区
  region: db.STRING(30),

  // 地址
  adress: db.STRING(200),

  id_default: db.BOOLEAN()
});
