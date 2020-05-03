import axios from 'axios'

// GET LEADS
export const userLoginFetch = (body) => dispatch =>{

    axios.post('http://localhost:8000/auth/token/login', body)
            .then(function (response) {
                localStorage.setItem("token", response.data.token)
                dispatch(loginUser(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            });
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
