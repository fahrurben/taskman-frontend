import { combineReducers } from 'redux';
import loginReducer from './login';
import projectReducer from './project-index';
import projectCreateReducer from './project-create';

const rootReducers = combineReducers({
  login: loginReducer,
  projectIndex: projectReducer,
  projectCreate: projectCreateReducer,
});

export default rootReducers;
