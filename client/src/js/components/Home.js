var React = require('react');

var Home = React.createClass({
getInitialState:function(){
  return({getarray:[]});
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



 render:function(){

   return(
     <div>
     <div className="Home">
       <div className="container-fluid">
         <div className="row">
           <div className="col-lg-2">
           </div>
           <div className="col-lg-8">
             <h2>Welcome to Home</h2>

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

module.exports = Home;
