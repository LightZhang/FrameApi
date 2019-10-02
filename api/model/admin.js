/* jshint indent: 2 */


const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('admin', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: '\'\''
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '\'\''
  },
  password_salt: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '\'\''
  },
  last_login_ip: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: '\'\''
  },
  last_login_time: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
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
  },
  avatar: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '\'\''
  },
  admin_role_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  }
});