
/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('category', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(90),
    allowNull: false,
    defaultValue: ''
  },
  keywords: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  front_desc: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  parent_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  sort_order: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '50'
  },
  show_index: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  is_show: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  },
  banner_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  icon_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  img_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  wap_banner_url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  level: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  front_name: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});