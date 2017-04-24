const conn = require('./conn');

const LineItem = conn.define('line_item', {
  questSession: {
    type: conn.Sequelize.BOOLEAN
  }
})

module.exports = LineItem;
