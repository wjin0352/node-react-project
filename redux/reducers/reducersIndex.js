import { combineReducers } from 'redux';
import actions from '../actions/userActions';
import usersReducer from './userReducer';

// to combine all your reducers into one
const allReducers = combineReducers({
  users: usersReducer
});

// exports.allReducers = allReducers;
export default allReducers;
