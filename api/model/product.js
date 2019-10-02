/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('product', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  goods_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  goods_specification_ids: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  goods_sn: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  goods_number: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  retail_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  }
});