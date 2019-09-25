'use strict';
const path = require('path');
const fs = require('fs');
const db = require('../../middleware/db');

let modelUrl = path.resolve(__dirname, './service/');
let files = fs.readdirSync(modelUrl);

let js_files = files.filter(f => {
  return f.endsWith('.js');
}, files);

for (let f of js_files) {
  console.log(`import model from file ${f}...`);
  let name = f.substring(0, f.length - 3);
  module.exports[name] = require(path.resolve(modelUrl, f));
}
