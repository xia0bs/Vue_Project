var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var connection =  require('../../config/db');

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get('/getlisth1',(req,res)=>{
   connection.query("select * from category where pid=0",(err,result)=>{
      res.json(result);
   })
});
router.get('/getlisth2',(req,res)=>{
    var id = req.query.id;
    connection.query("select * from category where pid="+id,(err,result)=>{
        res.json(result);
    })
});

router.post('/insert',(req,res)=>{
    let sql = "insert into goods (";
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


router.get('/query',(req,res)=>{
    var sid = req.query.sid;
    connection.query("select * from goods where sid=?",[sid],(err,result)=>{
        res.json(result);
    })
});

/*router.get('/demo',(req,res)=>{
    connection.query("select * from category",(err,result)=>{
        let data = result;
        let arr = tree(data)
        function tree(data) {
            var map = {};
            data.forEach(function (item) {
                map[item.id] = item;       //这里的ID根据数据库的字段
            });
            console.log(map);
            var val = [];
            data.forEach(function (item) {
                var parent = map[item.pid];      //这里是父级ID---pid
                if (parent) {
                    (parent.children || (parent.children = [])).push(item);
                } else {
                    val.push(item);
                }
            });
            return val;
        }

        res.send(arr);
    })
});*/
module.exports = router;