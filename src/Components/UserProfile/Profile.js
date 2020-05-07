import React, { Component } from 'react';
import { Header } from '../Header'
import MyExpense from '../MyExpense/MyExpense'

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        <Header />
        <div className="row">
          <div className="col-md-12 "><MyExpense /></div>
        </div>
      </div>
    );
  }
}
export default Profile
