const db = require('../../middleware/db');
module.exports = db.defineModel('user', {
  name: db.STRING(30),
  sex: db.STRING(10),
  age: db.INTEGER(),
  address: db.STRING(200),
  phone: db.STRING(100),
  id_card: db.STRING(100),
  pass_word: db.STRING(200),
  // 合伙人编号
  partner_number: db.STRING(30),
  // 入伙费用
  accupation_fee: db.DOUBLE(),
  // 已缴纳费用
  payment_fee: db.DOUBLE(),

  we_opend_id: db.STRING(200),

  we_nick_name: db.STRING(),

  we_image: db.STRING(200)
});
