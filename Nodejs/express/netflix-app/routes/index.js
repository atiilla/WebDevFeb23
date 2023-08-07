var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',username:'Admin',numbers:[1,2,3,4,5,6] });
});

router.get('/:name',function(req,res,next){
  // let name = req.params.name
  let {name} = req.params
  res.render('user',{username:name})
})

module.exports = router;

