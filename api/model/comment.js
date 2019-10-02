
/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('comment', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  type_id: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  value_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  content: {
    type: Sequelize.STRING(6550),
    allowNull: false
  },
  add_time: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: '0'
  },
  status: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  user_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  new_content: {
    type: Sequelize.STRING(6550),
    allowNull: false,
    defaultValue: ''
  }
});