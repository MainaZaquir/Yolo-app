// Simple Express web server.
// @see http://howtonode.org/getting-started-with-express

// Load the express module.
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello from Zaquir Maina DevOps'.
app.get('/', function(req, res){
    res.send('Hello Zaquir Maina DevOps!!');
});

// Listen on port 80 (like a true web server).
app.listen(80);
console.log('Express server started successfully.');
