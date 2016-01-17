var bl = require("bl");
var http =require("http");
http.get(process.argv[2],function(response){

  response.pipe (bl(function(err,data) {
    if (err)
      return console.log("an error in getting data");
    console.log(data.toString().length);console.log(data.toString());}))});
