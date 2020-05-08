const initialState = {
    currentUser: {},
    isLoggedIn: false,
    statusMessage: ''
  }
  

export default function(state = initialState,action) {

    switch (action.type) {
        case 'LOGIN_USER':
          return {
            ...state, 
            currentUser: action.payload,
            statusMessage: action.message,
            isLoggedIn:action.login_status
          }
        case 'REGISTER_USER':
          return {
            ...state, 
            currentUser: action.payload,
            statusMessage: action.message,
            isLoggedIn:action.login_status
          }
        default:
          return state;
      }
}