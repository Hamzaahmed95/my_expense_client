import { combineReducers} from 'redux'
import authentication_reducer from './authentication_reducer'
import my_expense from './my_expense'

export default combineReducers({
    authentication_reducer,
    my_expense
});

