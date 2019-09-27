const path = require('path');
const common = require('../../tool/common');
let folderName = path.resolve(__dirname, '../service/');
let services = common.mapFiles(folderName);

module.exports = services;
