/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('feedback', {
  msg_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  parent_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  user_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  user_name: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  user_email: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  msg_title: {
    type: Sequelize.STRING(200),
    allowNull: false,
    defaultValue: ''
  },
  msg_type: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  msg_status: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  msg_content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  msg_time: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  message_img: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '0'
  },
  order_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  msg_area: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});