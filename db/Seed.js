const db = require('./conn');

const User = require( './User' );
const Product = require( './Product' );
const Category = require( './Category');
const Attribute = require('./Attribute');
const Attributevalue = require('./Attributevalue');

const users = [
  { name: 'Arum', email: 'arum@google.com', password: '1234', isAdmin: false },
  { name: 'Richard', email: 'richard@google.com', password: '1234', isAdmin: true },
  { name: 'Evan', email: 'evan@google.com', password: '1234', isAdmin: true },
  { name: 'Alex', email: 'alex@google.com', password: '1234', isAdmin: true }
];

const categories = [
  {name: 'EYEGLASSES'}, {name: 'SUNGLASSES'}
]
const attributes = [
  {name: 'Gender'}, {name: 'Shape'}, {name:'Material'}, {name:'Color'}
]

const attributeValues = [
  {name:'Man'}, {name:'Woman'},{name: 'Rectangle'}, {name: 'Squre'}, {name:'Oval'}, {name:'Plastic'},{name:'Wood'}, {name:'Metal'}, {name:'Black'},{name:'White'}, {name:'Brown'}
]

const products = [
  {name:'earth',description:'natural glasses',price: 55, inventory: 100, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672234688_shad_fr?$pngalpha$&wid=300&defaultimage=8053672234688_shad_qt'},
  {name:'mercury',description:'hot glasses',price: 150, inventory: 50, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672234688_shad_qt?$pngalpha$&wid=300&defaultimage=8053672234688_shad_fr'},
  {name:'jupiter',description:'heavy glasses',price: 80, inventory: 100,imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672060874_shad_qt?$pngalpha$&wid=300&defaultimage=8053672060874_shad_fr'},
  {name:'mars',description:'red glasses',price: 120, inventory: 60, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672060874_shad_fr?$pngalpha$&wid=300&defaultimage=8053672060874_shad_qt'},
  {name:'sun',description:'hot glasses',price: 110, inventory: 200, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/888392244604_shad_fr?$pngalpha$&wid=300&defaultimage=888392244604_shad_qt'},
  {name:'neptune',description:'blue glasses',price: 250, inventory: 10, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672599800_shad_fr?$pngalpha$&wid=300&defaultimage=8053672599800_shad_qt'},
  {name:'uranus',description:'far glasses',price: 45, inventory: 15, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/725125646659_shad_fr?$pngalpha$&wid=300'},
  {name:'saturn',description:'disk glasses',price: 95, inventory: 45, imageUrl:'http://s7d9.scene7.com/is/image/Lenscrafters/8053672600889_shad_qt?$pngalpha$&wid=300'},
]

const populateRandomCategory = () =>{
  for(let i = 0; i < products.length; i++){
    let randomNumber = (Math.ceil(Math.random()*categories.length))
    products[i] = Object.assign({}, products[i], { categoryId:randomNumber })
  }
}

populateRandomCategory();

const seed = () => {
  return db.sync({ force: true})
  .then(() => User.bulkCreate(users))
  .then(() => Category.bulkCreate(categories))
  .then(() => Product.bulkCreate(products))
  .then(() => Attribute.bulkCreate(attributes))
  .then(() => Attributevalue.bulkCreate(attributeValues))
  .catch((error) => console.log(error))
}

module.exports = seed;
