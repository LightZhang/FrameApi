const db = require('../../middleware/db');
module.exports = db.defineModel('order', {
  order_sn: db.STRING(30),
  goood_id: db.STRING(30),
  user_id: db.INTEGER(),
  order_status: db.STRING(),
  order_price: db.DOUBLE()
});
