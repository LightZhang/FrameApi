var ejs = require('ejs');
module.exports = {
  'GET /api/template': async (ctx, next) => {
    var people = ['geddy', 'neil', 'alex'],
      html = ejs.render('<h1><%= people.join(", "); %><h1>', { people: people });
    ctx.body = html;
  }
};
