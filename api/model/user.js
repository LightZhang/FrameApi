'use strict';
const db = require('../../middleware/db');
module.exports = db.defineModel('users', {
  name: db.STRING(30),
  password: db.STRING(200)
});
