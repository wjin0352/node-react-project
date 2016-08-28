import React from 'react';
import ReactDOM from 'react-dom';
import { router, Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Provider from 'react-redux';
import store from '../redux/stores/store';
import Main from './containers/Main'
import UsersContainer from './components/UsersContainer';
import UsersListWrapper from './components/UsersListWrapper';

// wrap our Router or Main app component with Provider as pass the store, this makes store available to all containers.

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <Route path='/users' component={UsersContainer} >

        </Route>
      </Route>
    </Router>
  </Provider>
);

module.exports = routes;
