const db = require('../../middleware/db');
module.exports = db.defineModel('good', {
  good_id: db.STRING(30),
  img_url: db.STRING(200),
  isDefault: db.BOOLEAN()
});
