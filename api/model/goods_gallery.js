/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');
module.exports = db.define('goods_gallery', {
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
  img_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  img_desc: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '5'
  }
});