/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('region', {
  id: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  parent_id: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  type: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '2'
  },
  agency_id: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});