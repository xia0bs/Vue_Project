var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../../config/db');

router.get('/shoplist', (req, res) => {
    var status = req.query.status;
    var page = req.query.page;
    var search = req.query.search;
    connection.query(`select * from shop where status=${status} and shopname like '%${search}%' order by sid asc`, function (err, result) {
         var total = result.length;
         var data =  result.slice((page-1)*3,page*3);
        res.json({total,data});
    })
});


router.get('/deleteshop', (req, res) => {
    var sid = req.query.sid;
    connection.query(`delete from shop where sid=${sid}`, (err, result) => {
        if (result.affectedRows === 1) {
            res.send('success');
        } else {
            res.send('fail');
        }

    })

});

router.get('/getone',(req,res)=>{
   var sid = req.query.sid;
   connection.query("select * from shop where sid="+sid,(err,result)=>{
       res.json(result[0]);
   })
});

router.get('/audit',(req,res)=>{
   var sid = req.query.sid , status = req.query.status;
   connection.query(`update shop set status=${status} where sid=${sid}`,(err,result)=>{
      if(result.affectedRows == 1){
          res.send('success');
      }else{
          res.send('fail');
      }
   })
});


module.exports = router;