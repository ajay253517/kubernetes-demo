var express = require('express');
var app = express ();

app.get ('/', function (req, res){
	res.send('Welcome to node app Running in k8-Prod v1 ');
});


var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host,port);
})
