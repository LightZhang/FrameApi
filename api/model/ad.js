/* jshint indent: 2 */


const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('ad', {
  id: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  ad_position_id: {
    type: Sequelize.INTEGER(5).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  media_type: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  name: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  link: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  image_url: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  end_time: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  enabled: {
    type: Sequelize.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  }
})
