var actions = require('../actions/userActions')

var  initialState = [];

// reducer function takes 2 arguments, current state and an action
var usersReducer = function(state, action) {
  state = state || initialState;
  // inside the reducer you should construct an object that will be the new state.
  // the returned value will replace the state of your application. everytime  a new action is dispatched the reducer is run again, updating state as needed.
  if (action.type === actions.SHOW_USERS) {
    return state.concat({
      name: action.repository,
      content: null
    });
  }
  return state;
};

exports.usersReducer = usersReducer;
