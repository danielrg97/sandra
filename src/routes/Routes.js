import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginComponent from '../components/login';
import HomeComponent from '../components/home';
import FormUserRegistry from '../components/login/userRegistry';
const Routes = () => {
    return (
      <Router>
          <Route exact path="/login" component={LoginComponent} />
          <Route path="/login/register" component={FormUserRegistry} />
          <Route path="/home" component={HomeComponent} />
      </Router>
    );
}
export default Routes;