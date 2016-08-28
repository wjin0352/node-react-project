import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <h2 className='header-click'>
          react redux app
        </h2>
        <ul className='header-tabs'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Show Users Info</Link></li>
          <li><Link to='/users'>About</Link></li>
        </ul>
        <hr/>
      </header>
    )
  }
});

module.exports = Header;
