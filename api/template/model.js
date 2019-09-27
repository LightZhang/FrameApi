const db = require('../../middleware/db');
module.exports = db.defineModel('user', {
  name: db.STRING(30),
  password: db.STRING(200)
});
