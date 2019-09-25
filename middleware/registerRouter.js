const fs = require('fs');
const routerGloab = require('koa-router')();
class registerRouter {
  init(dir) {
    let api_dir = dir || '../api/controller';
    this.registerRouter(routerGloab, api_dir);
    return routerGloab.routes();
  }

  registerRouter(router, dir) {
    fs.readdirSync(__dirname + '/' + dir)
      .filter(f => {
        return f.endsWith('.js');
      })
      .forEach(f => {
        console.warn(`  \n\n controllerName: ${f}...`);
        let controllerName = require(__dirname + '/' + dir + '/' + f);
        this.mapRouter(router, controllerName);
      });
  }

  mapRouter(router, controller) {
    try {
      let logTable = [];
      for (let url in controller) {
        if (url.startsWith('GET ')) {
          let path = url.substring(4);
          router.get(path, controller[url]);
          logTable.push({ type: 'GET', url: path });
        } else if (url.startsWith('POST ')) {
          let path = url.substring(5);
          router.post(path, controller[url]);
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
}

module.exports = new registerRouter();
