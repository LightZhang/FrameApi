/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('topic_category', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
});