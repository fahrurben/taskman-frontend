import { takeLatest, all } from 'redux-saga/effects';

import { AUTHENTICATE as LOGIN_AUTHENTICATE } from './redux-modules/login/types';
import { REGISTER } from './redux-modules/register/types';
import {
  FETCH_INIT_DATA as PROJECT_SEARCH_FETCH_INIT_DATA,
  FETCH_DATA as PROJECT_SEARCH_FETCH_DATA,
  DELETE_PROJECT as PROJECT_SEARCH_DELETE_PROJECT,
}
  from './redux-modules/project-index/types';

import {
  FETCH_INIT_DATA as TASK_SEARCH_FETCH_INIT_DATA,
  FETCH_DATA as TASK_SEARCH_FETCH_DATA,
  DELETE_TASK as TASK_SEARCH_DELETE_TASK,
}
  from './redux-modules/task-index/types';

import { CREATE_PROJECT as PROJECT_ADD_CREATE_PROJECT } from './redux-modules/project-add/types';
import {
  FETCH_INITIAL_DATA as TASK_ADD_FETCH_INITIAL_DATA,
  CREATE_TASK as TASK_ADD_CREATE_TASK,
} from './redux-modules/task-add/types';

import {
  FETCH_INITIAL_DATA as PROJECT_EDIT_FETCH_INITIAL_DATA,
  UPDATE_PROJECT as PROJECT_EDIT_UPDATE_PROJECT,
}
  from './redux-modules/project-edit/types';

import {
  FETCH_INITIAL_DATA as TASK_EDIT_FETCH_INITIAL_DATA,
  UPDATE_TASK as TASK_EDIT_UPDATE_TASK,
}
  from './redux-modules/task-edit/types';

import { authenticate as loginAuthenticate } from './redux-modules/login/services';
import { register } from './redux-modules/register/services';

import {
  fetchInitialData as projectSearchFetchInitData,
  fetchData as projectSearchFetchData,
  deleteProject as projectSearchDeleteProject,
} from './redux-modules/project-index/services';

import {
  fetchInitialData as taskSearchFetchInitData,
  fetchData as taskSearchFetchData,
  deleteTask as taskSearchDeleteTask,
} from './redux-modules/task-index/services';

import { createProject as projectAddCreateProject } from './redux-modules/project-add/services';
import {
  fetchInitialData as taskAddFetchInitialData,
  createTask as taskAddCreateTask,
} from './redux-modules/task-add/services';

import {
  fetchInitialData as projectEditFetchInitialData,
  updateProject as projectEditUpdateProject,
} from './redux-modules/project-edit/services';

import {
  fetchInitialData as taskEditFetchInitialData,
  updateTask as taskEditUpdateTask,
} from './redux-modules/task-edit/services';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN_AUTHENTICATE, loginAuthenticate),
    yield takeLatest(REGISTER, register),
    yield takeLatest(PROJECT_SEARCH_FETCH_INIT_DATA, projectSearchFetchInitData),
    yield takeLatest(TASK_SEARCH_FETCH_INIT_DATA, taskSearchFetchInitData),
    yield takeLatest(PROJECT_SEARCH_FETCH_DATA, projectSearchFetchData),
    yield takeLatest(TASK_SEARCH_FETCH_DATA, taskSearchFetchData),
    yield takeLatest(PROJECT_SEARCH_DELETE_PROJECT, projectSearchDeleteProject),
    yield takeLatest(TASK_SEARCH_DELETE_TASK, taskSearchDeleteTask),
    yield takeLatest(PROJECT_ADD_CREATE_PROJECT, projectAddCreateProject),
    yield takeLatest(TASK_ADD_FETCH_INITIAL_DATA, taskAddFetchInitialData),
    yield takeLatest(TASK_ADD_CREATE_TASK, taskAddCreateTask),
    yield takeLatest(PROJECT_EDIT_FETCH_INITIAL_DATA, projectEditFetchInitialData),
    yield takeLatest(PROJECT_EDIT_UPDATE_PROJECT, projectEditUpdateProject),
    yield takeLatest(TASK_EDIT_FETCH_INITIAL_DATA, taskEditFetchInitialData),
    yield takeLatest(TASK_EDIT_UPDATE_TASK, taskEditUpdateTask),
  ]);
}
