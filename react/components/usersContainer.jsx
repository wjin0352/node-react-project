const React = require('react');
const connect = require('react-redux').connect;
const UserData = require('./userData');
const { Link } = require('react-router');
const { connector } = require('../../redux/stores/store');
const bindActionCreators = require('redux').bindActionCreators;
const data = require('./data');
const actions = require('../../redux/actions/userACtions');

const UsersContainer = React.createClass({
  render (props) {
    return (
      <div>
        <Link to='/'>
          Back to main
        </Link>
        <div className='show-users-list' >
          <ul>
            <UserData data={data} />
          </ul>
        </div>
      </div>
    )
  }
})

const mapStateToProps = function(state) {
  return {
    usersData: state
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

const Container = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

module.exports = Container;
