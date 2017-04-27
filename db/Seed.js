const db = require('./conn');

const User = require( './User' );
const Product = require( './Product' );
const Category = require( './Category');
const Attribute = require('./Attribute');
const Attributevalue = require('./Attributevalue');
const CategoryAttributeValue = require('./CategoryAttributeValue')
const ProductAttributeValue = require('./ProductAttributeValue')


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
  {name:'Man', attributeId:1}, {name:'Woman', attributeId:1},{name: 'Rectangle', attributeId:2}, {name: 'Square', attributeId:2}, {name:'Oval', attributeId:2}, {name:'Plastic', attributeId:3},{name:'Wood', attributeId:3}, {name:'Metal', attributeId:3}, {name:'Black', attributeId:4},{name:'White', attributeId:4}, {name:'Brown', attributeId:4}
]

const categoryAttributeValues = [];
for(var j = 1; j < 3; j++){
  for(var i = 1; i < 12; i++){
    categoryAttributeValues.push({categoryId:j, attributevalueId:i})
  }
}

const productAttributeValues = [];
for(var j = 1; j < 9; j++){
  for(var i = 1; i < 5; i++){
    let randomNumber;
    if(i===1){
      randomNumber = (Math.ceil(Math.random() * 2))
    }else{
      randomNumber = (Math.ceil(Math.random() * 3))
    }

    productAttributeValues.push({productId:j, attributevalueId:randomNumber})
  }
}


const products = [
  {name:'The Hamptons',description:'These golden tortoise sunglasses are a hipster’s dream. This ultra vintage style features an exaggerated brow line that comes in a semi-transparent tortoiseshell finish. Golden metal trim surrounds the rounded square shaped lenses and nose bridge. Single stud accent and adjustable nose pads complete the look.',price: 45, inventory: 100, imageUrl:'https://dmcfebaedy6rh.cloudfront.net/product/frame/white/spl4983_3.360x180.1488196410.jpg',categoryId:2},
  {name:'Hanoi',description:'These black sunglasses are atmospheric and vibrant. This classic wayfarer style comes in a glossy black acetate finish for that signature look. Single stud accents and bold temples create a stylish sturdy fashion accessory that complements any and all adventures.',price: 150, inventory: 50, imageUrl:'https://d2fzzlushqj6gw.cloudfront.net/product/frame/white/spl5517_3.360x180.1488196451.jpg',categoryId:2},
  {name:'Sergei',description:'Think outside the box with these Sergi sunglasses. This broad-temples black acetate and wood texture frame is a quirky, winning combination.',price: 80, inventory: 100,imageUrl:'https://d37j5ujucg66b1.cloudfront.net/product/frame/white/spl5650_3.360x180.1488196468.jpg',categoryId:2},
  {name:'Malibu',description:'These versatile tortoise sunglasses are an instant classic. This full plastic frame features a semi-transparent fiery tortoiseshell throughout and wayfarer shaped lenses. Unadorned and straightforward, this timeless look is the perfect accessory for any activity and suitable for both men and women',price: 120, inventory: 60, imageUrl:'https://dmcfebaedy6rh.cloudfront.net/product/frame/white/spl4801_3.360x180.1488196404.jpg',categoryId:2},
  {name:'Americana',description:'These Americana sunglasses never compromise on style. The chunky frame, with broad temples and thick, full-rim lenses give this design a boldness and refreshing sense of fun, which is added to by the aviator-inspired wayfarer lenses and silver studded detailing. The matte black plastic finish and gradient-gray shades add a final dash of cool to the ensemble.',price: 110, inventory: 200, imageUrl:'https://d2fzzlushqj6gw.cloudfront.net/product/frame/white/spl6042_3.360x180.1488196565.jpg',categoryId:2},
  {name:'Mandi',description:'These black eyeglasses are intelligent and assertive. This universally flattering rectangular shaped frame comes with a glossy black acetate finish. Single silver stud accents in the corners complete the look. The temples are boldly shaped and feature flexible spring hinges.',price: 89, inventory: 10, imageUrl:'https://d37j5ujucg66b1.cloudfront.net/product/frame/white/pl4732_3.360x180.1488195049.jpg',categoryId:1},
  {name:'St Michel',description:'Become the 21st century saint of style with St Michel. The contrast between sleek, matte gunmetal and retro outsize shaped lenses makes these full-rim eyeglasses uniquely trendy. The smooth, slimline design is complemented by a keyhole nose bridge and black temple tips to create a frame that gives an instant, edgy style boost.',price: 45, inventory: 15, imageUrl:'https://d2fzzlushqj6gw.cloudfront.net/product/front/white/mt6552.360x180.1488262388.jpg',categoryId:1},
  {name:'Palo Alto',description:'These silver eyeglasses definitely have a classic vintage feel. This rimless metal frame features a glossy silver finish and perfectly round lenses. The slender metal arms are completed with plastic arm tips, making this look demur and simple. Spring hinges add flexibility and comfort.',price: 95, inventory: 45, imageUrl:'https://dmcfebaedy6rh.cloudfront.net/product/frame/white/rm0787_3.360x180.1488196248.jpg',categoryId:1},
  {name:'Woodrow',description:'Channel your inner President with these Woodrow eyeglasses. This rimless black metal frame with rectangle shaped lenses is classic and professional.',price: 95, inventory: 45, imageUrl:'https://d2fzzlushqj6gw.cloudfront.net/product/frame/white/rm0805_3.360x180.1488196256.jpg',categoryId:1},
  {name:'Reunion',description:'Reunite style and functionality in these on-trend eyeglasses. Featuring a cool, outsize wayfarer shape, bold full-rim design, and neat, slightly arched nose bridge, this matte black metal frame is chic but not loud. Comfort and durability is ensured by premium metal construction, adjustable nose pads, and temple tips.',price: 95, inventory: 45, imageUrl:'https://d37j5ujucg66b1.cloudfront.net/product/frame/white/mt6225_3.360x180.1488194257.jpg',categoryId:1},
]

// const populateRandomCategory = () =>{
//   for(let i = 0; i < products.length; i++){
//     let randomNumber = (Math.ceil(Math.random()*categories.length))
//     products[i] = Object.assign({}, products[i], { categoryId:randomNumber })
//   }
// }

// populateRandomCategory();

const seed = () => {
  return db.sync({ force: true})
  .then(() => User.bulkCreate(users))
  .then(() => Category.bulkCreate(categories))
  .then(() => Product.bulkCreate(products))
  .then(() => Attribute.bulkCreate(attributes))
  .then(() => Attributevalue.bulkCreate(attributeValues))
  .then(() => CategoryAttributeValue.bulkCreate(categoryAttributeValues))
  .then(() => ProductAttributeValue.bulkCreate(productAttributeValues))
  .catch((error) => console.log(error))
}

module.exports = seed;
