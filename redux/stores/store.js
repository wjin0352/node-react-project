var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('../reducers/usersReducer');

var store = createStore(reducers.usersReducer);
module.exports = store;
