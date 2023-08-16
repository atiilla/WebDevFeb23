var express = require('express');
var router = express.Router();
var UserModel = require('../model/user')
const EmailValidation = require('emailvalid')
const ev = new EmailValidation()
var cookieSession = require('cookie-session')
router.get('/', function (req, res, next) {
  res.json({
    msg: 'User Endpoint'
  })
});

function setCookie(req, res, next) {
  res.cookie('token', 'qwokqwqm2121212jxjczzcselrl3j4kj23kj', {
    // maxAge: 10000,
    httpOnly: true,
    secure:true,
    path: '/',
    expires: new Date(Date.now() + 60000),
    sameSite: 'none'
  })
  next()
}


router.post('/login', setCookie, function (req, res) {
  const { username, password } = req.body
  UserModel.find({
    'username': username
  })
    .then(userobj => {
      if (userobj.length > 0) {
        let user = userobj[0];
        if (user.password === password) {
          // res.cookie('token','qwokqwqm2121212jxjczzcselrl3j4kj23kj',{
          //   maxAge:86400000,
          //   httpOnly:true,
          //   path:'/',
          //   expires: new Date(Date.now() + 900000)
          // })

          res.json({
            userdata: userobj,
            msg: 'User logged in!',
            cookie: req.cookies['token']
          })
        } else {
          res.status(401).json({
            msg: 'password is not correct!'
          })
        }
      } else {
        res.status(401).json({
          msg: 'Username not found'
        })
      }
    })
})

router.post('/register', function (req, res) {
  const userData = req.body // user data is object {username:'oooo',password:'querty'}
  let user = new UserModel(userData) // new user

  let isEmailValid = ev.check(userData.email)

  if ((isEmailValid.domain !== null && isEmailValid.errors.includes('freemail')) || isEmailValid.valid) {
    user.save().then(result => res.status(200).json(result)).catch(err => res.status(400).json({
      msg: 'send your payload correct',
      err
    }))
  } else {
    res.status(400).json({
      error: 'Email is not valid'
    })
  }


  // alternative way for validation of payload
  // UserModel.find({
  //   username: req.body.username
  // })
  //   .then(userobj => {

  //     if (userobj.length > 0) {
  //       res.status(400).json({
  //         error: 'This username is already exists'
  //       })
  //     } else {
  //       user.save().then(result => res.status(200).json(result)).catch(err => res.status(400).json({
  //         msg: 'send your payload correct',
  //         err
  //       }))
  //     }

  //   })


})

function isLoggedIn(req, res, next) {
  console.log(req.cookies.token)
  let token = "qwokqwqm2121212jxjczzcselrl3j4kj23kj"
  // jwt.verify(token,'secretkey')
  if(req.cookies.token){
    next()
  }
  else{
    res.status(401).send('Not allowed')
  }
}

router.get('/profile', isLoggedIn, (req, res) => {
  res.send('This is profile page!')
})

// http://localhost:8181/user/verify-auth
router.get('/verify-auth', function (req, res) {
  res.json({
    msg: 'VErify auth endpoint'
  })
})

module.exports = router;


/*
COOKIE

token=secretToken; Max-Age=86400; Path=/; Expires=Thu, 17 Aug 2023 11:20:54 GMT; HttpOnly

*/