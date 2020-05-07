import React, { Component } from 'react';
import { MyModal } from '../MyModal'
import { Header } from '../Header'
import MyExpense from '../MyExpense/MyExpense'

class Profile extends Component {

  componentDidMount() {
  }
  header() {
    return (
      <div className="modal-header">
        <h4>Hello from Header</h4>
      </div>
    )
  }
  body() {
    return (
      <div className="modal-body">
        <h2>Hello from body</h2>
      </div>
    )
  }
  render() {
    return (
      <div className="profile">
        <Header />
        <div className="row">
          <div className="col-md-12"><MyExpense /></div>
        </div>
        <MyModal/>
       
      </div>
    );
  }
}
export default Profile
