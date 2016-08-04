var express = require('express');
var router = express.Router();
var controller = require('./controller.main');

router.get('/', controller.getRoot);

module.exports = router;

