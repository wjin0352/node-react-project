import React from 'react';
import ReactDOM from 'react-dom';
import { router, Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import actions from '../../redux/actions/userActions';
import data from '../components/data';
import { Provider } from 'react-redux';
import store from '../../redux/stores/store';
import Header from '../components/Header';
import UsersContainer from '../components/usersContainer';
import UserData from '../components/userData';

const Main = React.createClass({
  render (props) {
    return (
      <div className="app-container">
        <Header />
        {this.props.children}
      </div>
    )
  }
});

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <Route path='/users' component={UsersContainer} >
          <IndexRoute component={UserData} />
        </Route>
      </Route>
    </Router>
  </Provider>);

// store.dispatch(actions.show_users(data));
// if you used mapdispatchtoprops you can refreence this as below
// this.props.show_users(data);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(routes, document.getElementById('app'));
});



module.exports = Main;
