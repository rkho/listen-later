var express = require('express');
var router = require('./routes.js');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;


//App server
//===========

app.use(express.static(__dirname + './../client'));
app.use(bodyParser());

app.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', router);
//TODO: Add in bodyparser to use before every request

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
});

app.get('/', function(req, res) {
  res.render('index');
})

app.post('/api/add/:link', function(req, res) {
  res.send('You have sent! ' + req.params.link)
})

app.get('/api/user/:name', function(req, res) {
  res.send('You have requested ' + req.params.name)
})

module.exports = app;
