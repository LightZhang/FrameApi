/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('user_level', {
  id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
    defaultValue: ''
  },
  description: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});