var net = require('net')  

function pad(num)
{
  if (num<10)
    return "0"+num;
  else
    return num;
}

var server = net.createServer(function (socket) {  
    // socket handling logic  
  var date=new Date;
  socket.end("" + date.getFullYear() + "-" +pad(date.getMonth()+1)+ "-" +pad(date.getDate())+" "+pad(date.getHours())+":"+pad(date.getMinutes())+"\n");
});  
server.listen(parseInt(process.argv[2]));  

