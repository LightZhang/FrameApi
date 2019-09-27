'use strict';

module.exports = {
  isTokenValid: (token, client) => {
    return new Promise((resove, reject) => {
      client.hgetall(token, (err, value) => {
        if (err) {
          resove(false);
        } else {
          if (value) {
            let { creatTime, expires } = value;
            let now = Date.now();
            if (now - creatTime > expires) {
              resove(false);
            } else {
              resove(true);
            }
          } else {
            resove(false);
          }
        }
      });
    });
  },
  mapFiles(folderName) {
    const path = require('path');
    const fs = require('fs');
    const db = require('../middleware/db');
    let exportFiles = {};
    let modelUrl = folderName;
    let files = fs.readdirSync(modelUrl);
    let js_files = files.filter(f => {
      return f.endsWith('.js');
    }, files);

    for (let f of js_files) {
      let name = f.substring(0, f.length - 3);
      exportFiles[name] = require(path.resolve(modelUrl, f));
    }

    debugger;
    return exportFiles;
  }
};
