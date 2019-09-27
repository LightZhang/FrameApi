const path = require('path');
const common = require('../../tool/common');
let folderName = path.resolve(__dirname, '../model/');

let models = common.mapFiles(folderName);

module.exports = models;
