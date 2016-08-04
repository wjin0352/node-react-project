var path = require('path');

function MainController() {}

MainController.prototype.getRoot = function(req, res) {
  res.sendFile(path.join(__dirname, '../../../public/index'));
}

module.exports = MainController.prototype;


