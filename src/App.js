import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Login from './Components/Login'
import Signup from './Components/Signup'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }

}

export default App;
