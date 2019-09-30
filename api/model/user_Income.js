const db = require('../../middleware/db');
module.exports = db.defineModel('user_income', {
  // 商品代码
  order_id: db.STRING(30),

  // 用户代码
  user_id: db.STRING(30),

  // 收益金额
  income_amount: db.DOUBLE()
});
