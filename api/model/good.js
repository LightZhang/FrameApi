const db = require('../../middleware/db');
module.exports = db.defineModel('good', {
  name: db.STRING(200),

  // 商品所属分类
  type_id: db.STRING(30),

  // 商品提供者
  sell_user_id: db.STRING(30),

  // 快递费用
  courier_fees: db.DOUBLE(),

  // 满减包邮
  full_reduction_num: db.DOUBLE(),

  // 成本价
  cost_price: db.DOUBLE(),

  // 售出价格
  sold_price: db.DOUBLE(),

  // 总库存数量
  stock_num: db.INTEGER(),

  // 实时库存数量
  real_time_stock_num: db.INTEGER(),

  // 已售
  sold_num: db.INTEGER(),

  // 是否上架
  is_shelf: db.BOOLEAN(),

  // 是否新品
  is_new: db.BOOLEAN(),

  // 是否推荐
  is_whether: db.BOOLEAN(),

  // 描述
  description: db.TEXT()
});
