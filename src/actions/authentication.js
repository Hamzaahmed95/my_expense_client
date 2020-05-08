import axios from 'axios'
// GET LEADS
export const userLoginAPI = (body) => dispatch =>{

    axios.post('http://localhost:8000/auth/token/login', body)
            .then(function (response) {
                localStorage.setItem("token", response.data.auth_token)
                
                dispatch({
                    type: 'LOGIN_USER',
                    payload: response.data,
                    message: 'success',
                    login_status:true
                })
               
                console.log("response: "+JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                dispatch({
                    type: 'LOGIN_USER',
                    payload: {},
                    message: 'failed',
                    login_status:false
                })
            })
            .finally(function () {
            });
}

export const userRegisterAPI = (body) => dispatch =>{

    axios.post('http://localhost:8000/auth/users/', body)
            .then(function (response) {
                dispatch({
                    type: 'REGISTER_USER',
                    payload: response.data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: 'REGISTER_USER',
                    payload: {},
                    status: 'failed'
                })
            })
            .finally(function () {
            
            });
}
