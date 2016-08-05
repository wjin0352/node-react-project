var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  message: String
});

// animalSchema.statics.findByName = function(name, cb) {
//   return this.find({ name: new RegExp(name, 'i') }, cb);
// };
module.exports = mongoose.model('User', userSchema);

