import React, { Component } from 'react';
import {Header} from '../Header'
import {SideNavbar} from '../SideNavbar'
import MyExpense from '../MyExpense/MyExpense'

class Profile extends Component {

  componentDidMount() {
  }
  render() {
    return (
      <div className="profile">
        <Header/>
        <div className="row">
            <div className="col-md-12"><MyExpense/></div>
          </div>
      </div>
    );
  }
}
export default Profile
