/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('keywords', {
  keyword: {
    type: Sequelize.STRING(90),
    allowNull: false,
    defaultValue: '',
    primaryKey: true
  },
  is_hot: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  is_default: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  is_show: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  sort_order: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '100'
  },
  scheme_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});