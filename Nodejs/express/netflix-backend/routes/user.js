const { profile,login,register } = require('../controller/user');
const router = require('express').Router();

router.get('/',profile)
router.post('/login',login);
router.post('/register',register)


module.exports = router;