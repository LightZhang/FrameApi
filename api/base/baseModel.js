const path = require('path');
const Sequelize = require('sequelize');
const common = require('../../tool/common');
let folderName = path.resolve(__dirname, '../model/');


let models = common.mapFiles(folderName);

models['op'] = Sequelize.Op;

module.exports = models;
