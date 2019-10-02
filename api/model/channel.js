
/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('channel', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(45),
    allowNull: false,
    defaultValue: ''
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  icon_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(4).UNSIGNED,
    allowNull: false,
    defaultValue: '10'
  }
});