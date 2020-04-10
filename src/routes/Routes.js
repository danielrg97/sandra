import React from 'react';
import { Router, Route } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import localBrowserHistory from './historyRouter';
import store  from './../components/store';
import LoginComponent from '../components/login';
import HomeComponent from '../components/home';
import FormUserRegistry from '../components/login/userRegistry';
const Routes = () => {
    const history = syncHistoryWithStore(localBrowserHistory, store);
    return (
      <Router history={history}>
          <Route exact path="/login" component={LoginComponent} />
          <Route path="/login/register" component={FormUserRegistry} />
          <Route path="/home" component={HomeComponent} />
      </Router>
    );
}
export default Routes;