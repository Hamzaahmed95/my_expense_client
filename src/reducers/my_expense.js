const initialState = {
  myExpense: [],
  status: false
}


export default function (state = initialState, action) {

  switch (action.type) {
    case 'READ_MY_EXPENSE':
      return {
        ...state,
        myExpense: action.payload,
        status: action.status
      }
    case 'DELETE_MY_EXPENSE':
      return {
        ...state,
        myExpense: state.myExpense.filter(myExpense => myExpense.id !== action.payload),
        status: action.status
      }
    default:
      return state;
  }
}