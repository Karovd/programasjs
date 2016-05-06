String.prototype.contains = function(sub) { return this.indexOf(sub) > -1; };
var fs = require('fs');
var dir = require('path');

module.exports = function(index, fileExtension, callback){
	fs.readdir(index, function(err, list){
		if(err){
			return callback(err);
		}
		var ext = '.'+fileExtension;
		var fileArray = list.filter(function(file){
			return dir.extname(file) === ext;
		});
		callback(null,fileArray)
	});
}
	
		
