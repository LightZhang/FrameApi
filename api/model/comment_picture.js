/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');


module.exports = db.define('comment_picture', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  comment_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  sort_order: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '5'
  }
});