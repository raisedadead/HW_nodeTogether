var express = require('express');
var app = express();
const motivations = require('motivations');

app.get('/', function(request, response){
	response.send("Hello Bengaluru!");
});

app.get('/helloWorld', function(request, response){
	response.send("Hello World!");
});

app.get('/Q_SelfRand', function(request, response){
	var quote = motivations[Math.floor(Math.random()*motivations.length)];
	response.send(quote);
	console.log("Sent the Quote : " + quote);
});

module.exports = app;
