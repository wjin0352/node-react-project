var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  message: String
});

module.exports = mongoose.modle('User', userSchema);
