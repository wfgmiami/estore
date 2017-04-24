const conn = require('./conn');

const Order = conn.define('order', {
  status: {
    type: conn.Sequelize.ENUM,
    values: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    defaultValue: 'Pending'
  }
})

module.exports = Order;
