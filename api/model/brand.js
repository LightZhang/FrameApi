
/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('brand', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  simple_desc: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '50'
  },
  is_show: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  floor_price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  app_list_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  is_new: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  new_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  new_sort_order: {
    type: Sequelize.INTEGER(2).UNSIGNED,
    allowNull: false,
    defaultValue: '10'
  }
});