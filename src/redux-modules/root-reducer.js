import { combineReducers } from 'redux';
import statusReducer from './status';
import createPaginationResources from './pagination-resouces';
import loginReducer from './login';
import registerReducer from './register';
import projectCreateReducer from './project-add';
import projectEditReducer from './project-edit';
import taskReducer from './task-index';
import taskAddReducer from './task-add';
import taskEditReducer from './task-edit';
import { PROJECT_LOOKUPS, PROJECT_RESOURCES, TASK_RESOURCES } from './types';
import createLookupResources from './lookup-resources';

const projectsReducer = createPaginationResources(PROJECT_RESOURCES);
const tasksReducer = createPaginationResources(TASK_RESOURCES);

const projectLookupsReducer = createLookupResources(PROJECT_LOOKUPS);

const rootReducers = combineReducers({
  status: statusReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  projectLookups: projectLookupsReducer,
  login: loginReducer,
  register: registerReducer,
  projectCreate: projectCreateReducer,
  projectEdit: projectEditReducer,
  taskIndex: taskReducer,
  taskAdd: taskAddReducer,
  taskEdit: taskEditReducer,
});

export default rootReducers;
