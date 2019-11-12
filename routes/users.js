var express = require('express');
var router = express.Router();
var db=require('../db')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res,next){
  var data=req.body;
  var name=data.name;
  var email=data.email;
  var password=data.password;
  db.query("INSERT INTO user SET ?",{name:name,email:email,password:password},(err,result)=>{
    if(err){
      res.send(err)
    }else{
      
      res.send(result)
    }
  })




})

router.get('/alluser',function(req,res,next){
  db.query("SELECT * from user",function(err,result){
    if(result){
      res.send(result)
    }
  })
})



module.exports = router;
