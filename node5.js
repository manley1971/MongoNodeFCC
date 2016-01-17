var fs=require("fs");
fs.readdir(process.argv[2],function(err,buf){
  var str = buf.toString();
  var f = str.split(",");
  for (var i =0;i<f.length;i++)
    if (f[i].endsWith("."+process.argv[3]))
      console.log(f[i]);});
