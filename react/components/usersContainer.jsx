const React = require('react');
const UserData = require('./userData');
const { Link } = require('react-router');
const data = require('./data');

const UsersContainer = React.createClass({
  render (props) {
    return (
      <div>
        <Link to='/'>
          Back to main
        </Link>
        <div className='show-users-list' >
          <ul>
            <UserData data={data}/>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = UsersContainer;
