var http = require('http'); 
var map = require('through2-map')  

var server = http.createServer(function (req, res) {  
      // request handling logic...  
     req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase()  
     })).pipe(res);  
})  
server.listen(parseInt(process.argv[2]));
