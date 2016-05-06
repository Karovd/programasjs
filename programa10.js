var net = require('net');

function extraNumber(num){
	if(num<=9){
		return '0'+num;
	}
	else{
		return num;
	}
}  
       
function momentoAtual(){  
	var data = new Date();
return data.getFullYear()+'-'+ extraNumber(data.getMonth() + 1)+'-'+extraNumber(data.getDate())+' '+extraNumber(data.getHours())+':'+extraNumber(data.getMinutes());  
}
       
var server = net.createServer(function(socket){ socket.end(momentoAtual()+'\n')});  

server.listen(Number(process.argv[2]));
