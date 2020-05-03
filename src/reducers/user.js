const initialState = {
    currentUser: {},
    status: ''
  }
  

export default function(state = initialState,action) {

    switch (action.type) {
        case 'LOGIN_USER':
          return {
            ...state, 
            currentUser: action.payload,
            status: action.status
          }
        case 'REGISTER_USER':
          return {
            ...state, 
            currentUser: action.payload,
            status: action.status
          }
        default:
          return state;
      }
}