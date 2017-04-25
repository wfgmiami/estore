const conn = require('./conn');

const Attributevalue = conn.define('attributevalue', {
  name: {
    type: conn.Sequelize.STRING
  }
})

module.exports = Attributevalue;
