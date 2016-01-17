var fs=require("fs");
fs.readFile(process.argv[2],function(err,buf){
var str = buf.toString();
var count = str.split("\n");
console.log(count.length-1);});
