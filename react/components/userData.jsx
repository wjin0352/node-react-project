const React = require('react');

const UserData = React.createClass({
  render (props) {
    var result = this.props.data.map(function(user) {
    return (
            <div key={user.id} className='user-data'>
              <li > {user.name}</li>
              <li >username: {user.username}</li>
              <li >email: {user.email} </li>
              <li >street: {user.address.street} </li>
              <li >suite: {user.address.suite} </li>
              <li >city: {user.address.city} </li>
              <li >zipcode: {user.address.zipcode} </li>
              <li >lat:  {user.address.geo.lat} </li>
              <li >lng:  {user.address.geo.lng} </li>
            </div>
            );
  });
    console.log(result);
    return (
      <div>
        <ul>
          {result}
        </ul>
      </div>
    )
  }
})

module.exports = UserData;
