import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import projectReducer from './project-index';
import projectCreateReducer from './project-add';
import projectEditReducer from './project-edit';
import taskReducer from './task-index';
import taskAddReducer from './task-add';
import taskEditReducer from './task-edit';

const rootReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  projectIndex: projectReducer,
  projectCreate: projectCreateReducer,
  projectEdit: projectEditReducer,
  taskIndex: taskReducer,
  taskAdd: taskAddReducer,
  taskEdit: taskEditReducer,
});

export default rootReducers;
