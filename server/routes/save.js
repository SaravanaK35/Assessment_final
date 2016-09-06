var express=require('express');
var router=express.Router();
var newdatas=require('../models/participants');


router.post('/', function(req, res, next) {
  console.log(req.body);
  var saveData= new newdatas(req.body);
  saveData.waves=req.body.wave;
  saveData.namee=req.body.namee;
  saveData.email=req.body.email;
  saveData.Phoneno=req.body.Phoneno;
  saveData.giturl=req.body.giturl;
  saveData.employeecode=req.body.employeecode;
  saveData.employeedepartment=req.body.employeedepartment;
  saveData.employeedesignation=req.body.employeedesignation;
  saveData.skill=req.body.skill;
  saveData.experience=req.body.experience;




  saveData.save(function(err,success){
    if (err){
       return handleError(err);
     }
     else{
       console.log(saveData+"saved");
       res.json(req.body);
     }

  });
});
router.get('/', function(req,res) {

  newdatas.find({},function(err,data) {
    console.log("view"+data);
    res.send(data);
  });
});



module.exports= router;
