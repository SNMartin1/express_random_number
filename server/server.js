// Require express - gives us a function
var express = require('express');

// Create an instance of express by calling the function retured above - gives us an object
var app = express();
var port = 5000;


// Serve static files, our first 'route'
// '/*' is a wild card for ANY route, this is the catch all bucket
app.get('/*', function(req, res){
  res.send('Request recieved!');
});

//Start up our server
app.listen(5656, function(){
  console.log('listening on port', 5656);
});
