// const React = require('react');
// const ReactDOM = require('react-dom');
// const { Route, router, Router, browserHistory } = require('react-router');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
// var IndexRoute = require('react-router').IndexRoute;
const { IndexRoute } = require('react-router');
var browserHistory = router.browserHistory;
const Header = require('./header');
const UsersContainer = require('./usersContainer');
const UserData = require('./userData');
// const { store } = require('../../redux/stores/store');
// const { Provider } = require('react-redux');

const App = React.createClass({
  render (props) {
    return (
      <div className='app-container'>
        <Header />
        <h3>Show Users</h3>
          {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={UsersContainer} />
      <Route path='/' component={UserData} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('app'));
});

