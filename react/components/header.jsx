const React = require('react');
const { Link } = require('react-router');

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <h2 className='header-click'>
          <Link to='/'>
            Back to main
          </Link>
        </h2>
        <hr/>
      </header>
    )
  }
});

module.exports = Header;
