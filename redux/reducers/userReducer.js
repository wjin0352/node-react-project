import actions from '../actions/userActions';

const initialState = actions.data;

const usersReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SHOW_USERS) {
    return actions.data;
  }
  return state;
};

module.exports = usersReducer;
