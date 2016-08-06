var express = require('express');
var router = express.Router();
var controller = require('./controller.user');

router.get('/', controller.getUsers)
  .post('/', controller.createUser)
  .put('/:id', controller.editUser)
  .delete('/:id', controller.removeUser)

module.exports = router;
