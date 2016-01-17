var express = require('express')
var app = express()
app.get('/search', function(req, res) {
console.log(req.query.page);
//var arr = req.NAME.split("?");
//  var retval =JSON.stringify(attrs);
    res.send(req.query);
    })
app.listen(process.argv[2])

