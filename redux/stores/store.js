const redux = require('redux');
const createStore = redux.createStore;

const reducers = require('../reducers/userReducer');

const store = createStore(reducers.reducer);

module.exports = store;
