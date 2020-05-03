import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../App.css'
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/users';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoader: false,
            status: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {

        this.setState({ isLoader: true });
        let self = this;
        const body = {
            "email": this.state.email,
            "password": this.state.password
        }
        this.props.userLoginFetch(body)
        console.log("body: " + this.state.email + " " + this.state.password)

        // axios.post('http://localhost:8000/auth/token/login', body)
        //     .then(function (response) {
        //         self.setState({ isLoader: false });
        //         self.setState({status: 'success'})
        //         // handle success
        //         console.log(response.data.auth_token);
        //     })
        //     .catch(function (error) {
        //         self.setState({ isLoader: false });
        //         self.setState({status: 'failed'})
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
                
        //         // always executed
        //     });

        event.preventDefault();
    }


    render() {
        return (
            <div className="App">

                <div className="container">
                    <h1 className="login_heading">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" onChange={this.handleChange} placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <button type="submit" className="btn btn-default">Submit</button>
                        {/* {this.state.isLoader? <div className="loader"></div>:''}
                        <div className="status">{this.state.status}</div> */}
                    </form>

                </div>
            </div>
        );
    }

}
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  })
  
export default connect(null, mapDispatchToProps)(Login);

