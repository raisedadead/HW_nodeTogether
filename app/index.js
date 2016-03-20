var express = require('express');
var app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');

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

app.get('/Q', function(request, response){
	var quote = pickOne(motivations);
	response.send(quote);
	console.log("Sent the Quote : " + quote);
})

module.exports = app;
