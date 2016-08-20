var User = require('../../server/api/user/controller.user');

var SHOW_USERS = 'SHOW_USERS';
var showUsers =  function(content) {
  return {
    type: SHOW_USERS,
    content: content
  };
};

var action = showUsers(User.getUsers)
exports.SHOW_USERS = SHOW_USERS;


