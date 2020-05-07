import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { userRegisterAPI } from '../../actions/authentication_actions';
import {Button,TextField} from '@material-ui/core';
import logo from '../../public/logo.jpg';
import '../App/App.css'
import { Link } from 'react-router-dom'

export const Signup = () => {

    const [username, setUsername] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassword] = useState('');
    const status = useSelector(state => state.authentication_reducer.status);
    const dispatch = useDispatch()
   
    const handleChange = (event) => {
        if(event.target.name==='username'){
            setUsername(event.target.value)
        }
        if(event.target.name==='phone_number'){
            setPhoneNumber(event.target.value)
        }
        if(event.target.name==='first_name'){
            setFirstName(event.target.value)
        }
        if(event.target.name==='last_name'){
            setLastName(event.target.value)
        }
        if(event.target.name==='email'){
            setEmail(event.target.value)
        }
        if(event.target.name==='password'){
            setPassword(event.target.value)
        }
        if(event.target.name==='re_password'){
            setRePassword(event.target.value)
        }
    }

    const handleSubmit = (event) => {

        
        const body = {
            username,
            phone,
            first_name,
            last_name,
            email,
            password,
            re_password
        }
        console.log(body.username+" "+body.phone+" "+body.first_name+" "+body.last_name+" "+body.email+" "+body.password+" "+body.re_password)
       
        dispatch(userRegisterAPI(body))

        event.preventDefault();
    }
        return (
            <div className="App">

                <div className="container">
                    <img src={logo} width={75} height={75}/>
                    <h3 className="heading"> CV MAKER</h3>
                    <form onSubmit={handleSubmit.bind(this)}>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Username" type="text" name="username" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Number" type="text" name="phone_number" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="First Name" type="text" name="first_name" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Last Name" type="text" name="last_name" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Email Address" type="email" name="email" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Password" type="password" name="password" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Re-Password" type="password" name="re_password" onChange={handleChange.bind(this)}  />
                        </div>
                        
                        <Button variant="contained"  type="submit" color="primary">Submit</Button>
                        <div className={'status_' + status}>{status}</div>
                    </form>
                    <br/>
                    <span>Already have an account? <Link to="/login">Login </Link> Here</span>
                </div>
            </div>
        );
}

