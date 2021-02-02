import { takeLatest, all } from 'redux-saga/effects';

import { AUTHENTICATE as LOGIN_AUTHENTICATE } from './redux-modules/login/types';
import {
  FETCH_INIT_DATA as PROJECT_SEARCH_FETCH_INIT_DATA,
  FETCH_DATA as PROJECT_SEARCH_FETCH_DATA,
}
  from './redux-modules/project-index/types';
import { CREATE_PROJECT as PROJECT_ADD_CREATE_PROJECT } from './redux-modules/project-add/types';
import {
  FETCH_INITIAL_DATA as PROJECT_EDIT_FETCH_INITIAL_DATA,
  UPDATE_PROJECT as PROJECT_EDIT_UPDATE_PROJECT,
}
  from './redux-modules/project-edit/types';

import { authenticate as loginAuthenticate } from './redux-modules/login/services';

import {
  fetchInitialData as projectSearchFetchInitData,
  fetchData as projectSearchFetchData,
} from './redux-modules/project-index/services';
import { createProject as projectAddCreateProject } from './redux-modules/project-add/services';
import {
  fetchInitialData as projectEditFetchInitialData,
  updateProject as projectEditUpdateProject,
} from './redux-modules/project-edit/services';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN_AUTHENTICATE, loginAuthenticate),
    yield takeLatest(PROJECT_SEARCH_FETCH_INIT_DATA, projectSearchFetchInitData),
    yield takeLatest(PROJECT_SEARCH_FETCH_DATA, projectSearchFetchData),
    yield takeLatest(PROJECT_ADD_CREATE_PROJECT, projectAddCreateProject),
    yield takeLatest(PROJECT_EDIT_FETCH_INITIAL_DATA, projectEditFetchInitialData),
    yield takeLatest(PROJECT_EDIT_UPDATE_PROJECT, projectEditUpdateProject),
  ]);
}
