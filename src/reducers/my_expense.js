const initialState = {
    myExpense: []
  }
  

export default function(state = initialState,action) {

    switch (action.type) {
        case 'MY_EXPENSE':
          return {
            ...state, 
            myExpense: action.payload,
          }
          case 'DELETE_MYEXPENSE':
            return{
                ...state,
                myExpense: state.myExpense.filter(myExpense => myExpense.id !== action.payload)
            }
        default:
          return state;
      }
}