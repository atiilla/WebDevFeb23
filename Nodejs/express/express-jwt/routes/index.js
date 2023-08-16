var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
/* GET home page. */

function isTokenValid(req,res,next){
  let token = req.headers['authorization'].split(" ")[1] // find token in headders
  jwt.verify(token,'verysecretkey',(err,decoded)=>{
    if(decoded){
      next()
    }else{
      res.status(401).json(err)
    }
  })
}

router.get('/', function (req, res, next) {

  res.json({
    id: 1
  })
});

router.post('/login', (req, res, next) => {
  let user = req.body
  let token = jwt.sign({
    username: user.username,
    time: new Date(),
  }, 'verysecretkey',{
    expiresIn:'30s'
  })

  res.json({
    username: user.username,
    token: token
  })

})

router.post('/verify',isTokenValid,(req,res,next)=>{
  
    res.json({
      msg:'Verified!!!'
    })
  
})

router.get('/dashboard',isTokenValid,(req,res)=>{
  res.send("Dashboard!!!")
})

module.exports = router;
