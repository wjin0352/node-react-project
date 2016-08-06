var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  message: String
});

// animalSchema.statics.findByName = function(name, cb) {
//   return this.find({ name: new RegExp(name, 'i') }, cb);
// };

// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

// // var Kitten = mongoose.model('Kitten', kittySchema);
// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

module.exports = mongoose.model('User', userSchema);

