/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('user', {
  id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: '',
    unique: true
  },
  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  gender: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  birthday: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  register_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  last_login_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  last_login_ip: {
    type: Sequelize.STRING(15),
    allowNull: false,
    defaultValue: ''
  },
  user_level_id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  nickname: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  mobile: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  register_ip: {
    type: Sequelize.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  avatar: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  weixin_openid: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  }
})
