var express = require('express');
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express();
var spawn = require("child_process").spawn;
var process = spawn('python', ["layout/scripts/test.py"]);

// middleware, static file serving in node, callbacks

app.use(express.static(__dirname + '/layout'));
//app.use('/bower_components', express.static(__dirname + '/../bower_components'));
//app.use('/partials', express.static(__dirname + '/partials'));

app.get('/*', function(req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.redirect('index.html', {
    root: __dirname
  });
});

app.listen(8080);