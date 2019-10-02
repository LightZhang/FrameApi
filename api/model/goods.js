/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('goods', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  category_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_sn: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  brand_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_number: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  keywords: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  goods_brief: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  goods_desc: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  is_on_sale: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  add_time: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  sort_order: {
    type: Sequelize.INTEGER(4).UNSIGNED,
    allowNull: false,
    defaultValue: '100'
  },
  is_delete: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  attribute_category: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  counter_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  extra_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  is_new: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_unit: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  primary_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  retail_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  sell_volume: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  primary_product_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  unit_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  promotion_desc: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  promotion_tag: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  app_exclusive_price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  is_app_exclusive: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false
  },
  is_limited: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false
  },
  is_hot: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});