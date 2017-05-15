
var http = require('http');
var fs = require('fs');
var twit = require('fs');
var x = require("x");

//var readStream = fs.createReadStream(__dirname + '/text2.txt','utf8');
//var writeStream = fs.createWriteStream(__dirname +'/write1.txt');
//readStream.pipe(writeStream);(
var server = http.createServer(function(req,res){
	console.log('request was made at :' +req.url);
	res.writeHead(200,{'Content-Type': 'text/plain'});
	var readStream = fs.createReadStream(__dirname + '/text2.txt','utf8');
	readStream.pipe(res)

});
server.listen(3000,'127.0.0.1');
console.log('we are listening at port 3000');
