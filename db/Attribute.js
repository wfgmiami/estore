const conn = require('./conn');

const Attribute = conn.define('attribute', {
  name: {
    type: conn.Sequelize.STRING
  }
})
module.exports = Attribute;
