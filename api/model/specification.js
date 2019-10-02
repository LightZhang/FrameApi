/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('specification', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});
