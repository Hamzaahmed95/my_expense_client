import { combineReducers} from 'redux'
import authentication from './authentication'
import my_expense from './my_expense'

export default combineReducers({
    authentication,
    my_expense
});

