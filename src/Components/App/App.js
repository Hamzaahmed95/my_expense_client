import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from '../Authentication/Login/Login.js'
import { Signup } from '../Authentication/Signup/Signup.js'
import { LandingPage } from '../../containers/LandingPage/LandingPage.js'
import { Error } from '../../containers/Error/Error.js'
import MyProfile from '../MyProfile/MyProfile.js'
import {PrivateRoute} from '../../utils/PrivateRoutes'
import store from '../../store'
import { Provider } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={Signup} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={MyProfile} />
              <Route component={Error} />

            </Switch>
          </main>
        </div>
      </Provider>
    );
  }

}

export default App;
