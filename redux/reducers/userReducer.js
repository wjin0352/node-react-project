const combineReducers = require('redux').combineReducers;
const actions = require('../actions/userActions');

const initialState = [];

const usersReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SHOW_USERS) {
    return action.data;
  }
  return state;
};

// to combine all your reducers into one
// const reducer = combineReducers({
//   users: usersReducer
// });

// exports.reducer = reducer;
export default usersReducer;
