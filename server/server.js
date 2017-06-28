// Require express - gives us a function
var express = require('express');
var randomNum = require('./modules/randomNumber.js');
var path = require('path');

// Create an instance of express by calling the function retured above - gives us an object
var app = express();
var port = 5656;

// custom routes must be defined before our catch all bucket '/*'
app.get('/randomNumber', function(req, res) {
  //res.send(randomNum(100, 1000));
  console.log("hi");
  //res.send("hello");
  var randomNumber = randomNum(1, 100);
  res.send('random number: ' + randomNumber);
});


// Serve static files, our first 'route'
// '/*' is a wild card for ANY route, this is the catch all bucket
//This will look in our public folder for files that match
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});


//Start up our server
app.listen(5656, function(){
  console.log('listening on port', 5656);
});
