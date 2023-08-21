const { home } = require('../controller');
const router = require('express').Router();

router.get('/',home)

module.exports = router;