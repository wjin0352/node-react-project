const data = require('../../react/components/data');

const SHOW_USERS = 'SHOW_USERS';
const show_users = function(data) {
  console.log(data);
  return {
    type: SHOW_USERS,
    data: data
  };
};

exports.SHOW_USERS = SHOW_USERS;
exports.show_users = show_users;
exports.data = data;
