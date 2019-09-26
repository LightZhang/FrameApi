const path = require('path');
const common = require('../../tool/common');
let folderName = path.resolve(__dirname, '../model/');
module.exports = common.mapFiles(folderName);
