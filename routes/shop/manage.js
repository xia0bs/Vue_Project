var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection =  require('../../config/db');

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get('/categorylist',(req,res)=>{
   connection.query("select * from category where pid=0",(err,result)=>{
      res.json(result);
   })
});

router.post('/categoryinsert',(req,res)=>{
   var {cname , pid} = req.body;
   connection.query("insert into category (cname,pid) values (?,?)",[cname,pid],(err,result)=>{
      if(result.affectedRows == 1){
          res.send('success');
      }else{
           res.send('fail');
      }
   })
});

router.get('/categoryquery',(req,res)=>{
    connection.query("select * from category ",(err,result)=>{
       res.json(result);
    })
});

module.exports = router;