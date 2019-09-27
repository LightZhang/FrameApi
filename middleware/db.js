'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const uuid = require('node-uuid');
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(__dirname, '../config/config.json'))[env];

console.log('init sequelize...');

function generateId() {
  return uuid.v4();
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

function defineModel(name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: Sequelize.STRING(50),
    primaryKey: true
  };
  attrs.createdDate = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.updatedDate = {
    type: Sequelize.BIGINT,
    allowNull: false
  };

  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function(obj) {
        let now = Date.now();
        if (obj.isNewRecord) {
          console.log('will create entity...' + obj);
          if (!obj.id) {
            obj.id = generateId();
          }
          obj.createdDate = now;
          obj.updatedDate = now;
        } else {
          console.log('will update entity...');
          obj.updatedDate = now;
        }
      }
    }
  });
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

var exp = {
  defineModel: defineModel,
  sync: () => {
    if (process.env.NODE_ENV !== 'production') {
      debugger;
      sequelize.sync({ force: true });
    } else {
      throw new Error("Cannot sync() when NODE_ENV is set to 'production'.");
    }
  }
};

for (let type of TYPES) {
  exp[type] = Sequelize[type];
}

module.exports = exp;
