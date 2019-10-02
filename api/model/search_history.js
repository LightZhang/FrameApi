/* jshint indent: 2 */


const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('search_history', {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  keyword: {
    type: Sequelize.CHAR(50),
    allowNull: false
  },
  from: {
    type: Sequelize.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  add_time: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  user_id: {
    type: Sequelize.STRING(45),
    allowNull: true
  }
});