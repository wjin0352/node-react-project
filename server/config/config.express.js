var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
  app.use(express.static('public'));
  app.use('/scripts', express.static(path.join(__dirname + '/node_modules')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
};
