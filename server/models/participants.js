var Mongoose=require('mongoose');
var Schema=Mongoose.Schema;

var datas= new Schema({

  waves: String,
  namee: String,
  email: String,
  Phoneno: String,
  giturl: String,
  employeecode: String,
  employeedepartment: String,
  employeedesignation: String,
  skill: String,
  experience: String

});

module.exports=Mongoose.model('newdatas',datas)
