var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection =  require('../../config/db');

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.post('/check',(req,res)=>{
    var {username , password} = req.body;
    var statusObj = {
        1:'审核通过',
        2:'审核未通过',
        3:'待审核'
    };
    connection.query("select * from shop where phone=? and password=?",[username,password],(err,result)=>{
        if(result.length){
             var status = result[0].status;
             res.json({status:status,message:statusObj[status],sid:result[0].sid});
        }else{
            res.send({status:'fail',message:'用户名或者密码错误'});
        }
    })

});


module.exports = router;