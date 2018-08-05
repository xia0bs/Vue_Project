var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection =  require('../../config/db');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/',function(req,res){
    // req.body
    let sql = "insert into shop (";

    for(let i in req.body){
        sql+= i +',';
    }
    sql = sql.slice(0,-1) + ') values (';
    for(let i in req.body){
        sql += `'${req.body[i]}',`;
    }
    sql = sql.slice(0,-1)+')';

    connection.query(sql,(err,result)=>{
        if(result.affectedRows == 1){
            res.send('success');
        }else{
            res.send('fail');
        }
    })

});





router.get('/data',function(req,res){
   connection.query("select * from sys_province , sys_city , sys_district where sys_province.province_id=sys_city.province_id and sys_city.city_id=sys_district.city_id",(err,result)=>{
       res.json(result);
   })
});
module.exports = router;