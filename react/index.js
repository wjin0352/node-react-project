var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var browserHistory = router.browserHistory;

var App = function() {

  return (
    <div className="app-container">
      <h3>Twitch channels</h3>
    </div>
  );
}

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});

