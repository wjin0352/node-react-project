var userRouter = require('../api/user/routes.user');
var mainRouter = require('../api/main/routes.main');
var path = require('path');

module.exports = function(app) {
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  });
  app.use('/', mainRouter);
  app.use('/users', userRouter);
}
