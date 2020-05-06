import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from '../Authentications/Login.js'
import { Signup } from '../Authentications/Signup.js'
import { Main } from '../Authentications/Main.js'
import { Error } from '../Authentications/Error.js'
import UserProfile from '../UserProfile/Profile'
import {PrivateRoute} from '../../Utils/PrivateRoutes'
import store from '../../store'
import { Provider } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={Signup} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={UserProfile} />
              <Route component={Error} />

            </Switch>
          </main>
        </div>
      </Provider>
    );
  }

}

export default App;
