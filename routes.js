const router = require('express').Router();
const Models = require('./db').models;
const jwt = require('jwt-simple');
const secret = process.env.SECRET || 'foo';

router.get('/products',(req,res,next)=>{
  Models.Product.findAll({ order: 'name' })
  .then( products => res.send(products))
  .catch(next);
})

router.get('/filters',(req,res,next)=>{
  Models.Attribute.findAll({
    include:[{
      model:Models.Attributevalue,
      include:[{
        model:Models.CategoryAttributeValue,
        include:[{
          model: Models.Category
        }]
      }]
    }]
  })
  .then( filters => res.send(filters))
})


router.post('/session', (req,res,next)=>{

  Models.User.findOne({
    where: { name: req.body.name, password: req.body.password }
  })
  .then( user => {
    if(user){
      const token = jwt.encode({ id: user.id },secret);
      return res.send(token)
    }else{
      return res.sendStatus(401)
    }

  })
  .catch(next);
})


router.get('/session/:token', (req,res,next)=>{
  try{
    const token = jwt.decode(req.params.token, secret)
    Models.User.findById(token.id)
    .then( user => {
      if(!user){
        return res.sendStatus(401)
      }
      res.send(user);
    })
  }catch(e){
    res.sendStatus(500)
  }
})

module.exports = router;
