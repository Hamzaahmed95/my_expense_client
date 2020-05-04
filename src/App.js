import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './Components/Login.js'
import { Signup } from './Components/Signup.js'
import store from './store'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={Signup} />
            </Switch>
          </main>
        </div>
      </Provider>
    );
  }

}

export default App;
