var User = require('./model.user');
var mongoose = require('mongoose');

function UserController() {}

UserController.prototype.getUsers = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.find({}, function(error, users) {
      if(error) {
        reject(error);
      } else {
        resolve(users);
      }
    });
  }).then(function(users) {
    res.status(200).json(users);
  }).catch(function(error) {
    console.log(error);
  });
}

UserController.prototype.getUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    var user_id = { _id: req.params.id };
    User.findOne(user_id, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then(function(user) {
      res.status(200).json(user);
    }).catch(function(error) {
      console.log(error);
    });
}

UserController.prototype.createUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    var newUser = {
      name: req.body.name,
      message: req.body.message
    };
    User.create(newUser, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then(function(user) {
      res.status(201).json(user);
    }).catch(function(error) {
      console.log(error);
    });
}

UserController.prototype.editUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    var _id = { _id: req.params.id };
    console.log(req.body);
    User.findOneAndUpdate(_id, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then(function(user) {
      user.name = req.body.name;
      user.message = req.body.message;
      user.save(function(err, user) {
        if(err) {
          console.log(err);
        } else {
          console.log('successful edit' + user);
        }
      });
      res.status(204).json(user);
    }).catch(function(error) {
      console.log(error);
    });
}

UserController.prototype.removeUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.findOneAndRemove({ _id: req.params.id }, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    })
  }).then(function(user) {
      res.status(204).end();
    }).catch(function(error) {
      console.log(error);
  });
}


module.exports = UserController.prototype;


