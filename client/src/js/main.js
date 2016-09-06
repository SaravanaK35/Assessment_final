var React=require('react');
var Reactdom=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var Navbar=require('./components/NavBar');
var ManageParticipants=require('./components/ManageParticipants');
var Home=require('./components/Home');



var Maincomponent=React.createClass({


  render: function() {
    return(
      <div>
         <Navbar/>
         <br/><br/><br/><br/>
         {this.props.children}
      </div>
    );

  }

});





Reactdom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Maincomponent}>
    <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/assessmentBox" component={ManageParticipants}/>
    </Route>
    </Router>,document.getElementById('app'));
