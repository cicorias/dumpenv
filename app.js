var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync('index.html');

var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  console.log('got a call');
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(readEnvironment());
}).listen(port);


function readEnvironment(){
  return JSON.stringify(process.env);
}