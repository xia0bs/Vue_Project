let express = require('express');
let router = express.Router();
let connection = require('../../config/db');


router.get('/',(req,res)=>{
   connection.query("select * from goods order by sid asc limit 0,3",(err,result)=>{
       res.json(result);
   })
});

router.get('/menu',(req,res)=>{
    connection.query("select * from category",(err,result)=>{
       let menu =  tree(result);
       function tree(result){
            let map = {};
            let value = [];
            result.forEach(element=>{
                map[element.id] = element;
            });
            result.forEach(element=>{
                let pid = element.pid;
                let parent = map[pid];
                if(parent){
                    if(!parent.children){
                        parent.children = [];
                    }
                    parent.children.push(element);
                } else{
                  value.push(element);
                }

            });
            return value;
        }
       res.json(menu);
    })
});

router.get('/list',(req,res)=>{
   let {cid , page} = req.query;
   let start = (page-1)*4 , end = page * 4;
   connection.query("select * from goods where h1=?",[cid],(err,result)=>{
       let total  = Math.ceil( result.length / 4);
       let list   = result.slice(start , end);
       res.send({ total , list});
   })
});


module.exports = router;