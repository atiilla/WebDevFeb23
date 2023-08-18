var express = require('express');
const { getUsers, getProfile,login, getRandomUser,register, logout } = require('../controller/userController');
var router = express.Router();
var {isTokenValid} = require('../middlewares/index')


/* GET users listing. */
router.get('/',isTokenValid, getUsers);
router.get('/profile', isTokenValid, getProfile)
router.get('/random-user',getRandomUser)

// POST requests
router.post('/login',login);
router.post('/register',register)
router.post('/logout',logout)


module.exports = router;
