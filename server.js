var express = require('express');
var app = express();
var variables = require('./config/variables.express');

require('./config/mongoose.connection');
require('./config/config.express')(app);
require('./config/routes.express')(app);

app.listen(variables.EXPRESS_PORT, function() {
  console.log('listening on port' + variables.EXPRESS_PORT);
});
