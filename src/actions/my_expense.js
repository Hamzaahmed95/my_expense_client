import axios from 'axios'

//CREATE 
export const createMyExpense = (body) => dispatch =>{

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

//READ 
export const readMyExpense = () => dispatch =>{

    axios.get('http://localhost:8000/my_expense/')
            .then(function (response) {
                
                dispatch({
                    type: 'READ_MY_EXPENSE',
                    payload: response.data,
                    status: true
                })
               
                console.log("response: "+JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                dispatch({
                    type: 'READ_MY_EXPENSE',
                    payload: [],
                    status: false
                })
            })
            .finally(function () {
            });
}

//UPDATE 
export const updateMyExpense = (id) => dispatch =>{

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

//DELETE 
export const deleteMyExpense = (id) => dispatch => {

    axios.delete(`http://localhost:8000/my_expense/${id}/`)
    .then(res => {
        dispatch({
            type: 'DELETE_MY_EXPENSE',
            payload: id
        })
    }).catch(err => console.log(err));
}