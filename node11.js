var fs=require("fs");
var http = require('http'); 
var server = http.createServer(function (req, res) {  
      // request handling logic...  
  var s =fs.createReadStream(process.argv[3]);
  s.pipe(res);  
  console.log("createdstream");
})  
server.listen(parseInt(process.argv[2]));
