// create a web server that listens on port 3000
// when you visit http://localhost:3000/comments
// it will return the comments.json file

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  fs.readFile('comments.json', function (err, data) {
    res.end(data);
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Run this server and visit http://localhost:3000/comments in your browser
// You should see the JSON data from comments.json displayed in the browser
// This is a simple example of serving static JSON data to a web client