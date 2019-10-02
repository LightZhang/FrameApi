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

function define(name, attributes) {
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

  return sequelize.define(name, attrs, {
    tableName: 'shop_' + name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now();
        // if (obj.isNewRecord) {
        //   console.log('will create entity...' + obj);
        //   if (!obj.id) {
        //     obj.id = generateId();
        //   }
        //   obj.createdDate = now;
        //   obj.updatedDate = now;
        // } else {
        //   console.log('will update entity...');
        //   obj.updatedDate = now;
        // }
      }
    }
  });
}

var exp = {
  define: define,
  sync: () => {
    if (process.env.NODE_ENV !== 'production') {
      sequelize.sync({ force: true });
    } else {
      throw new Error("Cannot sync() when NODE_ENV is set to 'production'.");
    }
  }
};


module.exports = exp;
