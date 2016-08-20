const React = require('react');
const UserData = require('./userData');

const UsersContainer = React.createClass({
  render (props) {


    return (
      <div className='show-users-list' >
        <ul>
          <li>
            <UserData />
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = UsersContainer;
