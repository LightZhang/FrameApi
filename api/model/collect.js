/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('collect', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  value_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  add_time: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  is_attention: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  type_id: {
    type: Sequelize.INTEGER(2).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});