import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux';
import {Button,TextField} from '@material-ui/core';
import { userLoginAPI } from '../actions/users';
import logo from '../logo.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {

        const body = {
            "email": this.state.email,
            "password": this.state.password
        }

        this.props.userLoginAPI(body)
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <img src={logo} width={75} height={75}/>
                    <h3 className="heading"> CV MAKER</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Email" type="email" name="email" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField type="password" required ={true} fullWidth={true} name="password" id="standard-basic" label="Password" onChange={this.handleChange} />
                        </div>
                    
                        <Button variant="contained"  type="submit" color="primary">Login</Button>
                        <div className={'status_' + this.props.status}>{this.props.status}</div>
                    </form>

                </div>
            </div>
        );
    }

}
const mapDispatchToProps = dispatch => ({
    userLoginAPI: userInfo => dispatch(userLoginAPI(userInfo)),
   
})
const mapStateToProps = state => ({
    status: state.user.status
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);

