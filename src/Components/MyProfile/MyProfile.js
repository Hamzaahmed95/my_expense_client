import React, { Component } from 'react';
import { Header } from '../../containers/Header/Header.js'
import MyExpense from '../MyExpense/MyExpense'
import PropTypes from 'prop-types';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: [],
    }
   
}

  render() {
    
    
    return (
      <div className="profile">
        <Header />
        <div className="row">
          <div className="col-md-12 "><MyExpense/></div>
  
        </div>
      </div>
    );
  }
}

export default Profile;

