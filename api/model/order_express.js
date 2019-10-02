/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('order_express', {
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
  shipper_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  shipper_name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  shipper_code: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  logistic_code: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: ''
  },
  traces: {
    type: Sequelize.STRING(2000),
    allowNull: false,
    defaultValue: ''
  },
  is_finish: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  request_count: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    defaultValue: '0'
  },
  request_time: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    defaultValue: '0'
  },
  add_time: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  update_time: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  }
});