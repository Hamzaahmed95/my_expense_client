import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './Components/Authentications/Login.js'
import { Signup } from './Components/Authentications/Signup.js'
import { Main } from './Components/Authentications/Main.js'
import { Error } from './Components/Authentications/Error.js'
import UserProfile from './Components/UserProfile/Profile'
import {PrivateRoute} from './Utils/PrivateRoutes'
import store from './store'
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
