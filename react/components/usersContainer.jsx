import React from 'react';
import store from '../../redux/stores/store';
import { Link } from 'react-router';
import { connector } from '../../redux/stores/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from './data';
import actions from '../../redux/actions/userActions';
import UserData from './userData';

const UsersContainer = React.createClass({

  render () {
    // console.log(actions.data);
    console.log(this.props.users);
    return (
      <div>
        <Link to='/'>
          Back to main
        </Link>
        <div className='show-users-list' >
          <ul>
            <UserData data={this.props.users} />
          </ul>
        </div>
      </div>
    )
  }
});

var mapStateToProps = function(state) {
  console.log(state);
  return {
    users: state.users
  };
};

var mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

// const Container = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// module.exports = Container;

export default connect(mapStateToProps)(UsersContainer);
