/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('order_goods', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  order_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  goods_sn: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  product_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  number: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  market_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  retail_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  goods_specifition_name_value: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  is_real: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_specifition_ids: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});