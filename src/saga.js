import { takeLatest, all } from 'redux-saga/effects';

import { AUTHENTICATE as LOGIN_AUTHENTICATE } from './redux-modules/login/types';
import { GET_INIT_DATA, GET_DATA } from './redux-modules/project-index/types';
import { CREATE_PROJECT } from './redux-modules/project-create/types';
import {
  FETCH_INITIAL_DATA as PROJECT_EDIT_FETCH_INITIAL_DATA,
  UPDATE_PROJECT,
}
  from './redux-modules/project-edit/types';

import { authenticate as loginAuthenticate } from './redux-modules/login/services';

import { projectPageGetInitData, projectPageGetData } from './redux-modules/project-index/services';
import { createProject } from './redux-modules/project-create/services';
import {
  fetchInitialData as projectEditFetchInitialData,
  updateProject,
} from './redux-modules/project-edit/services';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN_AUTHENTICATE, loginAuthenticate),
    yield takeLatest(GET_INIT_DATA, projectPageGetInitData),
    yield takeLatest(GET_DATA, projectPageGetData),
    yield takeLatest(CREATE_PROJECT, createProject),
    yield takeLatest(PROJECT_EDIT_FETCH_INITIAL_DATA, projectEditFetchInitialData),
    yield takeLatest(UPDATE_PROJECT, updateProject),
  ]);
}
