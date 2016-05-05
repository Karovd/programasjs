var fs = require('fs');

String.prototype.contains = function(sub) { return this.indexOf(sub) > -1; };

function callback(err, list){
	var fileExtension = '.'+process.argv[3];
	for(var i =0; i<list.length; i++){
		if(list[i].contains(fileExtension)){
			console.log(list[i]);
		}
	}
}

fs.readdir(process.argv[2], callback);
