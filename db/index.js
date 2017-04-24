const conn = require('./conn');

const User = require( './User' );
const Product = require( './Product' );
const Review = require( './Review' );
const Order = require('./Order' );
const Category = require( './Category');
const LineItem = require('./LineItem');

const seed = require('./Seed')

User.hasMany(Order);
Category.hasMany(Product);
// Category.hasMany(Product);
// Product.belongsToMany(Order, { through: 'LineItems' });
// Order.belongsToMany(Product, { through: 'LineItems' });
Order.hasMany(LineItem);
Product.hasMany(LineItem);
LineItem.belongsTo(Product);
LineItem.belongsTo(Order);

module.exports = {

  seed,
  models:{
    User,
    Product,
    Review,
    Order,
    Category
  }
}
