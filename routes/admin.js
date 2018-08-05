var express = require('express');
var router = express.Router();
/* GET home page. */
var login = require('./admin/login');
var check = require('./admin/check');


// /admin/login/check
router.use('/login',login);
router.use('/check',check);


module.exports = router;
