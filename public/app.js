// being compressed by webpack allows me to use require statement like this was a node file.
var $ = require('jquery');


$(document).ready(function(){
  $('#app').append('<li>' + 'hello' + '</li>');
});
