import { combineReducers } from 'redux'
import loginReducer from "./login"

const rootReducers = combineReducers({
    login: loginReducer,
})

export default rootReducers
