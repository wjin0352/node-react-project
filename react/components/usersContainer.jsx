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
    console.log(this.props);
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

const mapStateToProps = function(state) {
  return {
    users: state
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

const Container = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

module.exports = Container;
