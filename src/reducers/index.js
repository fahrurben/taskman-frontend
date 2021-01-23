import { combineReducers } from 'redux'
import loginReducer from "./login"
import projectReducer from "./project"

const rootReducers = combineReducers({
    login: loginReducer,
    project: projectReducer,
})

export default rootReducers
