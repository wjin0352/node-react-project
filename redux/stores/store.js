import redux from 'redux';
import { createStore } from 'redux';
import data from '../../redux/stores/store';
import allReducers from '../reducers/reducersIndex';

// const store = createStore(reducers.usersReducer, data);
const store = createStore(allReducers);

export default store;
