var React=require('react');

var Participantslist=React.createClass({


  render:function(){
    console.log("Participantslist render");
      return(
        <div>
        <div className="col-lg-12">
             <table className="table table-inbox table-hover table-striped col-lg-12 test">
              <tbody>
                <tr>
                  <td className="col-lg-1">{this.props.waves}</td>
                  <td className="col-lg-1">{this.props.namee}</td>
                  <td className="col-lg-1">{this.props.email}</td>
                  <td className="col-lg-1">{this.props.Phoneno}</td>
                  <td className="col-lg-1">{this.props.giturl}</td>
                  <td className="col-lg-1">{this.props.employeecode}</td>
                  <td className="col-lg-1">{this.props.employeedepartment}</td>
                  <td className="col-lg-1">{this.props.employeedesignation}</td>
                  <td className="col-lg-1">{this.props.skill}</td>
                  <td className="col-lg-1">{this.props.experience}</td>
                </tr>
              </tbody>
             </table>
        </div>
        </div>
      );
  }
});
module.exports=Participantslist;
