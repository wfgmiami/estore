const conn = require('./conn');

const Product = conn.define('product', {

  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: conn.Sequelize.DECIMAL,
    allowNull: false
  },
  inventory: {
    type: conn.Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: conn.Sequelize.STRING
  }
});

module.exports = Product;
