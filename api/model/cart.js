/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('cart', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  session_id: {
    type: Sequelize.CHAR(32),
    allowNull: false,
    defaultValue: ''
  },
  goods_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
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
  goods_name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
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
  number: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_specifition_name_value: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  goods_specifition_ids: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  checked: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});