var User = require('./model.user');

function UserController() {}

UserController.prototype.getUsers = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.find({}, function(error, users) {
      if(error) {
        reject(error);
      } else {
        resolve(users);
      }
    })
  }).then(function(users) {
    res.status(200).json(users);
  }).catch(function(error) {
    console.log(error);
  });
}

UserController.prototype.createUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.create({
      name: req.body.name,
      message: req.body.message
    }, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    }).then(function(user) {
      res.status(201).json(user);
    }).catch(function(error) {
      console.log(error);
    });
  });
}

UserController.prototype.editUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.findOne({ name: req.body.name }, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    }).then(function(user) {
      user.name = req.body.name;
      user.message = req.body.message;
      user.save();
      res.status(204).json(user);
    }).catch(function(error) {
      console.log(error);
    });
  });
}

UserController.prototype.removeUser = function(req, res) {
  return new Promise(function(resolve, reject) {
    User.remove({ name: req.body.name }, function(error, user) {
      if(error) {
        reject(error);
      } else {
        resolve(user);
      }
    }).then(function(user) {
      res.status(200);
    }).catch(function(error) {
      console.log(error);
    });
  });
}


module.exports = UserController.prototype;


