import { combineReducers } from 'redux';
import loginReducer from './login';
import projectReducer from './project-index';
import projectCreateReducer from './project-add';
import projectEditReducer from './project-edit';
import taskReducer from './task-index';

const rootReducers = combineReducers({
  login: loginReducer,
  projectIndex: projectReducer,
  projectCreate: projectCreateReducer,
  projectEdit: projectEditReducer,
  taskIndex: taskReducer,
});

export default rootReducers;
