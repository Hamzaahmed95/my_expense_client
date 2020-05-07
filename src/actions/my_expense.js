import axios from 'axios'
// GET LEADS
export const getMyExpense = () => dispatch =>{

    axios.get('http://localhost:8000/my_expense/')
            .then(function (response) {
                
                dispatch({
                    type: 'MY_EXPENSE',
                    payload: response.data,
                })
               
                console.log("response: "+JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            });
}

export const addMyExpense = (body) => dispatch =>{

    axios.post('http://localhost:8000/my_expense/',body)
            .then(function (response) {
                
                console.log("response: "+JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
}

export const editMyExpense = (id) => dispatch =>{

    axios.get(`http://localhost:8000/my_expense/${id}/`)
            .then(function (response) {
                
                dispatch({
                    type: 'MY_EXPENSE',
                    payload: response.data,
                })
               
                console.log("response: "+JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            });
}