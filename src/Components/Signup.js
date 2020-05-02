import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../App.css'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone_number: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            re_password: '',
            isLoader: false,
            status: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRePasswordChange =this.handleRePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    handlePhoneNumberChange(event) {
        this.setState({ phone_number: event.target.value });
    }
    handleFirstNameChange(event) {
        this.setState({ first_name: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleRePasswordChange(event) {
        this.setState({ re_password: event.target.value });
    }

    handleSubmit(event) {

        this.setState({ isLoader: true });
        let self = this;
        const body = {
            "username": this.state.username,
            "phone": this.state.phone_number,
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "email": this.state.email,
            "password": this.state.password,
            "re_password": this.state.re_password
        }
        console.log(body.username+" "+body.phone+" "+body.first_name+" "+body.last_name+" "+body.email+" "+body.password+" "+body.re_password)

        axios.post('http://localhost:8000/auth/users/', body)
            .then(function (response) {
                self.setState({ isLoader: false });
                self.setState({status: 'success'})
                // handle success
                console.log(response.data);
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
                    <h1 className="login_heading">Signup</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" onChange={this.handleUsernameChange} placeholder="Username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="number" onChange={this.handlePhoneNumberChange} placeholder="Phone Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={this.handleFirstNameChange} placeholder="First Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={this.handleLastNameChange} placeholder="Last Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="email" onChange={this.handleEmailChange} placeholder="Email Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Re-Password" onChange={this.handleRePasswordChange} className="form-control" id="exampleInputPassword1" />
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

export default Signup;