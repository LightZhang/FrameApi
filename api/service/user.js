const model = require('../base/baseModel');
const user = require('../model/user');

module.exports = {
  async findOne() {
    const user = await model.User.findAndCountAll({
      offset,
      limit,
      order: [['createdAt', 'desc'], ['id', 'desc']]
    });
    return user;
  }
};
