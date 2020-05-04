import { Router, Route, hashHistory } from 'react-router-dom'

import App from './App';

import React from 'react';
import { Login } from './Components/Login.js'
import { Signup } from './Components/Signup.js'

export default Routers = () => {
  return (
    <Router history={}>
      <Route path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/register" component={Signup} />
    </Router>
  );
}
