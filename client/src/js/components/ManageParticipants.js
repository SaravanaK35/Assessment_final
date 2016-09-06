var React=require('react');
var Participantslist=require('./Participantslist');

var ManageParticipants= React.createClass({
  getInitialState:function(){
  		return({getarray:[],dropdown:"",name:"",email:"",phone:"",giturl:"",empcode:"",empdept:"",empdesig:"",skills:"",exp:""});
    },

    handleDropdown:function(event){
    	this.setState({dropdown:event.target.value})
    },

    handleName:function(event){
    	this.setState({name:event.target.value})
    },

    handleEmail:function(event){
    	this.setState({email:event.target.value})
    },
    handlePhone:function(event){
    	this.setState({phone:event.target.value})
    },
    handleGitUrl:function(event){
    	this.setState({giturl:event.target.value})
    },
    handleEmpCode:function(event){
    	this.setState({empcode:event.target.value})
    },
    handleEmpDept:function(event){
    	this.setState({empdept:event.target.value})
    },
    handleEmpDesig:function(event){
    	this.setState({empdesig:event.target.value})
    },
    handleSkills:function(event){
    	this.setState({skills:event.target.value})
    },
    handleExp:function(event){
    	this.setState({exp:event.target.value})
    },
    saveData:function()
    	  {

    	    $.ajax({
    	          url: '/savedata',
    	          dataType: 'json',
    	          contentType: "application/json",
    	          type: 'POST',
    	          data: JSON.stringify({'waves': this.state.dropdown,'namee':this.state.name, 'email':this.state.email, 'Phoneno':this.state.phone, 'giturl':this.state.giturl, 'employeecode':this.state.empcode,'employeedepartment':this.state.empdept,'employeedesignation':this.state.empdesig,'skill':this.state.skills ,'experience':this.state.exp}),
    	          success: function(data)
    	          {
    	            console.log("Success");
                  this.setState({dropdown:"",name:"",email:"",phone:"",giturl:"",empcode:"",empdept:"",empdesig:"",skills:"",exp:""});
    	          }.bind(this),

    	          error: function(xhr, status, err) {
    	            console.error("Error.."+err.toString());
    	          }.bind(this)
    	        });

    	    this.getdata();

    	  },
  getdata:function(){
  $.ajax({
    url:'/getData',
    dataType: 'json',
    type: 'GET',
    success: function(data)
    {
     console.log("success");
     this.setState({getarray:data});
     console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(err.toString());
    }.bind(this)
  });

  },

  render:function() {

    var getdata=this.state.getarray.map(function(dataa) {
      console.log("manage");
      console.log(dataa.waves);
    return(
      <Participantslist waves={dataa.waves} namee={dataa.namee} email={dataa.email} Phoneno={dataa.Phoneno} giturl={dataa.giturl} employeecode={dataa.employeecode} employeedepartment={dataa.employeedepartment} employeedesignation={dataa.employeedesignation} skill={dataa.skill} experience={dataa.experience} />
    );
  });

    return(
    <div>
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-8">
            <form method="post" action="/operation">
              <div className="form-group">
                <label>Wave</label>
                    <select className="form-control" name="wave" onChange={this.handleDropdown}>
                    <option>Selectanyone</option>
                    <option value="Wave1">Wave_1</option>
                    <option value="Wave2">Wave_2</option>
                    <option value="Wave3">Wave_3</option>
                    <option value="Wave4">Wave_4</option>
                    <option value="Wave5">Wave_5</option>
                    <option value="Wave6">Wave_6</option>
                    </select>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input onChange={this.handleName} value={this.state.name} type="text" className="form-control" placeholder="Enter Your Name"/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input onChange={this.handleEmail} value={this.state.email} className="form-control" id="inputEmail" placeholder="Enter Your EmailId" type="email"/>
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input onChange={this.handlePhone} value={this.state.phone} type="text" className="form-control" placeholder="Enter Your Phone no" />
              </div>
              <div className="form-group">
                <label>Git Url</label>
                <input onChange={this.handleGitUrl} value={this.state.giturl} type="text" className="form-control" placeholder="Enter URL" />
              </div>
              <div className="form-group">
                <label >Employee Code</label>
                <input onChange={this.handleEmpCode} value={this.state.empcode} type="text" className="form-control" placeholder="Enter Your Employee Code"/>
              </div>
              <div className="form-group">
                <label>Employee Department</label>
                <input onChange={this.handleEmpDept} value={this.state.empdept} type="text" className="form-control" placeholder="Enter Your Employee Department"/>
              </div>
              <div className="form-group">
                <label>Employee Designation</label>
                <input onChange={this.handleEmpDesig} value={this.state.empdesig} type="text" className="form-control" placeholder="Enter Your Employee Designation"/>
              </div>
              <div className="form-group">
                <label>Skills</label>
                <textarea onChange={this.handleSkills} value={this.state.skills} className="form-control" id="inputMessage" placeholder="Message" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input onChange={this.handleExp} value={this.state.exp} type="text" className="form-control" placeholder="Enter Your Experience"/>
              </div>

              <button type="button" className="btn btn-default" onClick={this.saveData}>Submit</button>
              <br/>
              {getdata}
            </form>
            </div>
            <div className="col-lg-2">

            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports=ManageParticipants;
