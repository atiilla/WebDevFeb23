const { home } = require('../controller/movie');
const router = require('express').Router();

router.get('/',home)

module.exports = router;