var http = require('http'); 
var map = require('through2-map')  
var url = require('url');

var server = http.createServer(function (req, res) {  
  res.writeHead(200, { 'Content-Type': 'application/json' });  
  var retval={};
  if (url.parse(req.url, true).pathname=='/api/parsetime') {
      retval.hour = parseInt(url.parse(req.url,true).query.iso.split(":")[0].split("T")[1]);
      retval.minute = parseInt(url.parse(req.url,true).query.iso.split(":")[1]);
      retval.second = parseInt(url.parse(req.url,true).query.iso.split(":")[2]);
   }  else {
      var hours = parseInt(url.parse(req.url,true).query.iso.split(":")[0].split("T")[1]);
      var minutes = parseInt(url.parse(req.url,true).query.iso.split(":")[1]);
      var seconds = parseInt(url.parse(req.url,true).query.iso.split(":")[2]);
      var ms = parseInt(url.parse(req.url,true).query.iso.split(":")[2].split(".")[1]);
      var year= parseInt(url.parse(req.url,true).query.iso.split(":")[0].split("-")[0]);
      var month= parseInt(url.parse(req.url,true).query.iso.split(":")[0].split("-")[1]);
      var date= parseInt(url.parse(req.url,true).query.iso.split(":")[0].split("-")[2]);

      var d = new Date(year,month-1,date,hours,minutes,seconds,ms);
      retval.unixtime=d.getTime();

//      console.log("unixtime"+url.parse(req.url,true)+(url.parse(req.url,true).query.iso.split(":")+JSON.stringify(retval)));
    }
 res.write(JSON.stringify(retval));
      res.end();
//  query: { iso: '2016-01-12T02:48:13.998Z' },
/*     req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase()  
     })).pipe(res);*/  
})  
server.listen(parseInt(process.argv[2]));
