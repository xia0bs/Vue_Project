var express = require('express');
var router = express.Router();
var index = require('./user/index');


router.use('/index',index);

module.exports = router;
