var bl = require("bl");
var http =require("http");
var returns =0;
var retval = [];
var orders = [];

function printReturns()
{
  for (var i =0;i<3;i++)
    for (var j = 0; j<3; j++)
      if (orders[j]===i)
        console.log(retval[j]);
}

http.get(process.argv[2],function(response){

  response.pipe (bl(function(err,data) {
    if (err)
      return console.log("an error in getting data");
    returns++;
    retval.push(data.toString());
    orders.push(0);
    if (returns===3)
      printReturns();
}))});

http.get(process.argv[3],function(response){

  response.pipe (bl(function(err,data) {
    if (err)
      return console.log("an error in getting data");
    returns++;
    retval.push(data.toString());
    orders.push(1);
    if (returns===3)
      printReturns();
}))});

http.get(process.argv[4],function(response){

  response.pipe (bl(function(err,data) {
    if (err)
      return console.log("an error in getting data");
    returns++;
    retval.push(data.toString());
    orders.push(2);
    if (returns===3)
      printReturns();
}))});

