/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('user_coupon', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  coupon_id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  coupon_number: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: ''
  },
  user_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  used_time: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  order_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});