var express = require('express');
var router = express.Router();
var admission = require('./shop/admission');
var login = require('./shop/check');
var manage = require('./shop/manage');
var goodslist = require('./shop/goodslist');
/* GET users listing. */

router.use('/admission',admission);
router.use('/login',login);
router.use('/manage',manage);
router.use('/goodslist',goodslist);

module.exports = router;
