/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('shipper', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false,
    defaultValue: ''
  },
  code: {
    type: Sequelize.STRING(10),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '10'
  }
});