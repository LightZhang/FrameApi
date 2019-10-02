/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('ad_position', {
  id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  width: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  height: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  desc: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});