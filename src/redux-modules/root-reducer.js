import { combineReducers } from 'redux';
import loginReducer from './login';
import projectReducer from './project-index';
import projectCreateReducer from './project-add';
import projectEditReducer from './project-edit';
import taskReducer from './task-index';
import taskAddReducer from './task-add';

const rootReducers = combineReducers({
  login: loginReducer,
  projectIndex: projectReducer,
  projectCreate: projectCreateReducer,
  projectEdit: projectEditReducer,
  taskIndex: taskReducer,
  taskAdd: taskAddReducer,
});

export default rootReducers;
