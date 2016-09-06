var express=require('express');
var router=express.Router();
var newdatas=require('../models/participants');
router.get('/:docid',function(req,res,next){

  var id=req.params.docid;
  newdatas.findById(id, function(err,data){
    if(err)
    {
      throw err;
    }
    else
    {
      console.log("message got");
      res.json(data);
    }
  });
});



module.exports= router;
