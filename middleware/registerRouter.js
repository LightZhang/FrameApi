const fs = require('fs');

function init(routerGloab) {
  let api_dir = '../api/controller';
  registerRouter(routerGloab, api_dir);
  return routerGloab;
}

function registerRouter(routerGloab, dir) {
  fs.readdirSync(__dirname + '/' + dir)
    .filter(f => {
      return f.endsWith('.js');
    })
    .forEach(f => {
      console.warn(`  \n\n controllerName: ${f}...`);
      let controllerName = require(__dirname + '/' + dir + '/' + f);
      mapRouter(routerGloab, controllerName);
    });
}

function mapRouter(routerGloab, controller) {
  try {
    let logTable = [];
    for (let url in controller) {
      if (url.startsWith('GET ')) {
        let path = url.substring(4);
        routerGloab.get(path, controller[url]);
        logTable.push({ type: 'GET', url: path });
      } else if (url.startsWith('POST ')) {
        let path = url.substring(5);
        routerGloab.post(path, controller[url]);
        logTable.push({ type: 'POST', url: path });
      } else {
        logTable.push({ type: 'none', url: url });
      }
    }

    console.table(logTable);
  } catch (e) {
    console.log(e);
  }
}

module.exports = function() {
  let routerGloab = require('koa-router')();
  init(routerGloab);
  return routerGloab.routes();
};
