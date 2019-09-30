const db = require('../../middleware/db');
module.exports = db.defineModel('user_income', {
  parent_id: '',
  name: '',
  type: ''
});
