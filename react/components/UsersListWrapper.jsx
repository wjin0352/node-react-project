import React form 'react';
import { Link } from 'react-router';

const UsersListWrapper = React.createClass({
  render (props) {
    return (
      <div>
        <Link to='/'>
          Back to main
        </Link>
        <div className='show-users-list' >
          <ul>
            <UsersContainer data={this.props.users} />
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = UsersListWrapper;
