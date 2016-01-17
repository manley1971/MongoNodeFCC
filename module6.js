module.exports = function (dir,ext,cb) {  
  var fs=require("fs");
  var retval = [];
  fs.readdir(dir,function(err,buf){
    if (err)
      return cb(err);
    var str = buf.toString();
    var f = str.split(",");
    for (var i =0;i<f.length;i++)
      if (f[i].endsWith("."+ext))
        {retval.push(f[i]);}
    cb(null,retval);});
}
