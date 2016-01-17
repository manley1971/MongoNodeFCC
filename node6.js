var node6=require("./module6.js");
node6(process.argv[2],process.argv[3],function(err,buf){
  if (err) return;
  for (var i =0;i<buf.length;i++)
      console.log(buf[i]);});
