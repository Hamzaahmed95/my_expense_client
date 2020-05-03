import React, { Component } from 'react';
import { userRegisterAPI } from '../actions/users';
import {Button,TextField} from '@material-ui/core';
import { connect } from 'react-redux';
import logo from '../logo.png';
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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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
        this.props.userRegisterAPI(body)
        

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
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Username" type="text" name="username" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Number" type="text" name="phone_number" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="First Name" type="text" name="first_name" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Last Name" type="text" name="last_name" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Email Address" type="email" name="email" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Password" type="password" name="password" onChange={this.handleChange}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Re-Password" type="password" name="re_password" onChange={this.handleChange}  />
                        </div>
                        
                        <Button variant="contained"  type="submit" color="primary">Submit</Button>
                        <div className={'status_' + this.props.status}>{this.props.status}</div>
                    </form>

                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    userRegisterAPI: userInfo => dispatch(userRegisterAPI(userInfo)),
   
})
const mapStateToProps = state => ({
    status: state.user.status
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
