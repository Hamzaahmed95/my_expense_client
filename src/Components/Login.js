import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../App.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoader: false,
            status: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {

        this.setState({ isLoader: true });
        let self = this;
        const body = {
            "email": this.state.email,
            "password": this.state.password
        }
        console.log("body: " + this.state.email + " " + this.state.password)

        axios.post('http://localhost:8000/auth/users/', body)
            .then(function (response) {
                self.setState({ isLoader: false });
                self.setState({status: 'success'})
                // handle success
                console.log(response.data.auth_token);
            })
            .catch(function (error) {
                self.setState({ isLoader: false });
                self.setState({status: 'failed'})
                // handle error
                console.log(error);
            })
            .finally(function () {
                
                // always executed
            });

        event.preventDefault();
    }


    render() {
        return (
            <div className="App">

                <div className="container">
                    <h1 className="login_heading">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="email" onChange={this.handleEmailChange} placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <button type="submit" className="btn btn-default">Submit</button>
                        {this.state.isLoader? <div className="loader"></div>:''}
                        <div className="status">{this.state.status}</div>
                    </form>

                </div>
            </div>
        );
    }

}

export default Login;
