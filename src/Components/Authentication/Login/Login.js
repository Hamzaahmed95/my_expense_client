import React, {useState} from 'react';
import './Login.css'
import {Button,TextField} from '@material-ui/core';
import { userLoginAPI } from '../../../actions/authentication';
import logo from '../../../public/assets/logo.jpg';
import {useSelector, useDispatch} from 'react-redux'
import { Link,Redirect } from 'react-router-dom'


export const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const status = useSelector(state => state.authentication.statusMessage);
    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
    const dispatch = useDispatch()
   
    
    const handleChange =(event)=> {
        if(event.target.name==='password'){
            setPassword(event.target.value)
        }
        else{
            setEmail(event.target.value)
        }
    }

    const handleSubmit = (event)=> {

        const body = {
            email,
            password
        }
        dispatch(userLoginAPI(body))
        event.preventDefault();
    }
    
    if(isLoggedIn){
        return <Redirect to='/dashboard' />
    }
        return (
           
            <div className="App">
                <div className="container">
                    <img src={logo} width={75} height={75}/>
                    <h3 className="heading"> CV MAKER</h3>
                    <form onSubmit={handleSubmit.bind(this)}>
                        <div className="form-group">
                            <TextField color='primary' required ={true} fullWidth={true} id="standard-basic" label="Email" type="email" name="email" onChange={handleChange.bind(this)}  />
                        </div>
                        <div className="form-group">
                            <TextField type="password" required ={true} fullWidth={true} name="password" id="standard-basic" label="Password" onChange={handleChange.bind(this)} />
                        </div>
                    
                        <Button variant="contained"  type="submit" color="primary">Login</Button>
                        <div className={'status_' + status}>{status}</div>
                    </form>
                    <br/>
                    <span>Dont have an account? <Link to="/signup">Register </Link> Here</span>

                </div>
            </div>
        );

}

