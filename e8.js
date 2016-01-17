var express = require('express')
var app = express()
var fs = require('fs');
app.get('/books', function(req, res) {
  var retval = fs.readFileSync(process.argv[3],'utf8');
//var arr = req.NAME.split("?");
//  var retval =JSON.stringify(attrs);
console.log(process.argv[3]+"------"+retval+"-----==="+JSON.parse(retval));
    res.send(JSON.parse(retval));
    })
app.listen(process.argv[2])

