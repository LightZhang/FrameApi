/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('address', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: ''
  },
  user_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  country_id: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: '0'
  },
  province_id: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: '0'
  },
  city_id: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: '0'
  },
  district_id: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: '0'
  },
  address: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: ''
  },
  is_default: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  }
});