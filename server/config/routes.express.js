var userRouter = require('../api/user/routes.user');
var mainRouter = require('../api/main/routes.main');

module.exports = function(app) {
  app.use('/', mainRouter);
  app.use('/users', userRouter);
}
