import axios from 'axios'

// GET LEADS
export const userLoginFetch = (body) => dispatch =>{

    axios.post('http://localhost:8000/auth/token/login', body)
            .then(function (response) {
                localStorage.setItem("token", response.data.auth_token)
                dispatch(loginUser(response.data))
                dispatch({
                    type: 'LOGIN_USER',
                    payload: response.data,
                    status: 'success'
                })
                console.log("response: "+JSON.stringify(response.data.auth_token))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                dispatch({
                    type: 'LOGIN_USER',
                    payload: {},
                    status: 'failed'
                })
            })
            .finally(function () {
            });
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
