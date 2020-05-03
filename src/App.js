import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Login from './Components/Login'
import Signup from './Components/Signup'
import store from './store'

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Login />
        </div>
      </Provider>
    );
  }

}

export default App;
