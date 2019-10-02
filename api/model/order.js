/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('order', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  order_sn: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: '',
    unique: true
  },
  user_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  order_status: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  shipping_status: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  pay_status: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  consignee: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  country: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  province: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  city: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  district: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  address: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  postscript: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  shipping_fee: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  pay_name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  pay_id: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
    defaultValue: '0'
  },
  actual_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  integral: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  integral_money: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  order_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  goods_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  add_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  confirm_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  pay_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  freight_price: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  coupon_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  parent_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  coupon_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  callback_status: {
    type: Sequelize.ENUM('true', 'false'),
    allowNull: true,
    defaultValue: 'true'
  }
});