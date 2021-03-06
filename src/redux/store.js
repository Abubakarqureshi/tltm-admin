import {createStore, combineReducers} from 'redux'
import userReducer from './user/user.reducer'
const rootReducer = combineReducers({
    userReducer
})
export const store = createStore(rootReducer)