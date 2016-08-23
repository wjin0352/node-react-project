const redux = require('redux');
const createStore = redux.createStore;
const data = require('../../redux/stores/store');
const reducers = require('../reducers/userReducer');

const store = createStore(reducers.reducer, data);

module.exports = store;
