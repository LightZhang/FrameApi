const db = require('../../middleware/db');
module.exports = db.defineModel('setting', {
  key: db.STRING(30),
  value: db.STRING(30)
});
