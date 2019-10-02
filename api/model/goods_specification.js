/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('goods_specification', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  goods_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  specification_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  value: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});