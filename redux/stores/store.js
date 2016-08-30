import redux from 'redux';
import { createStore } from 'redux';
import allReducers from '../reducers/reducersIndex';
import actions from '../actions/userActions'
// const store = createStore(reducers.usersReducer, data);
const store = createStore(allReducers);
console.log(actions);

export default store;
