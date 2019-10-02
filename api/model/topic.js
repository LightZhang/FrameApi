/* jshint indent: 2 */

const db = require('../../middleware/db');
const Sequelize = require('sequelize');

module.exports = db.define('topic', {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '\'\''
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  avatar: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  item_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  subtitle: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '\''
  },
  topic_category_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  price_info: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  read_count: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: '0'
  },
  scene_pic_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  topic_template_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  topic_tag_id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  sort_order: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '100'
  },
  is_show: {
    type: Sequelize.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '1'
  }
});