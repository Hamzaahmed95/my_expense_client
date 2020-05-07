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
        default:
          return state;
      }
}