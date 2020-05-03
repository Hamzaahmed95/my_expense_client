import React, { Component } from 'react';
import axios from 'axios'
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../App.css'
import { connect } from 'react-redux';
import {Button,TextField} from '@material-ui/core';
import { userLoginFetch } from '../actions/users';
import PropTypes from 'prop-types';
import logo from '../logo.png';

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
    static propTypes = {
        currentUser: PropTypes.array.isRequired
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {

        this.setState({ isLoader: true });
        let self = this;
        const body = {
            "email": this.state.email,
            "password": this.state.password
        }
        this.props.userLoginFetch(body)

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
                            <TextField color='primary' required ={true} fullWidth={true} type="email" name="email" onChange={this.handleChange} id="standard-basic" label="Email" />
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

const styles = theme => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
});
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),
   
})
const mapStateToProps = state => ({
    status: state.user.status
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);

