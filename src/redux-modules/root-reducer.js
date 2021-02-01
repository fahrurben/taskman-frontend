import { combineReducers } from 'redux';
import loginReducer from './login';
import projectReducer from './project-index';
import projectCreateReducer from './project-create';
import projectEditReducer from './project-edit';

const rootReducers = combineReducers({
  login: loginReducer,
  projectIndex: projectReducer,
  projectCreate: projectCreateReducer,
  projectEdit: projectEditReducer,
});

export default rootReducers;
