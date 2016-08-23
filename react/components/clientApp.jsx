var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
const { IndexRoute, Link } = require('react-router');
var browserHistory = router.browserHistory;
const Header = require('./header');
const UsersContainer = require('./usersContainer');
const UserData = require('./userData');
const connect = require('react-redux').connect;
const Provider = require('react-redux').Provider;
const store = require('../../redux/stores/store');

const mapStateToProps = function(state, props) {
  return {
    data: state
  };
};

const App = React.createClass({
  render (props) {
    return (
        <div className='app-container'>
          <Header />
            {this.props.children}
        </div>
    );
  }
});

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/users' component={UsersContainer}>
          <IndexRoute component={UserData} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('app'));
});

