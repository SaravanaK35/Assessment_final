var React=require('react');
var NavLink=require('./Navlink');

var Navbar= React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
  			<div className="container">
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-left">
  						<li id="thatsyfood">Assessment</li>
  					</ul>
  				</div>
  				<div className="nav-collapse collapse navbar-responsive-collapse">
  					<ul className="nav navbar-nav pull-right" id="nav">
  						<li>
  							<NavLink to="/home">home</NavLink>
  						</li>
              <li>
  							<NavLink to="/assessmentBox">Manage Participants</NavLink>
  						</li>
            </ul>
  				</div>
  			</div>
  		</div>

    );
  }
});
module.exports=Navbar;
