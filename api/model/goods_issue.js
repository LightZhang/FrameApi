/* jshint indent: 2 */
const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('goods_issue', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  goods_id: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  question: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  answer: {
    type: Sequelize.STRING(45),
    allowNull: true
  }
});