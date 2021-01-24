import { takeLatest, all } from 'redux-saga/effects';

import {
  LOGIN_SUBMIT,
} from './redux-modules/login/types';

import {
  GET_INIT_DATA,
  GET_DATA,
} from './redux-modules/project-index/types';

import {
  loginSubmit,
} from './redux-modules/login/services';

import {
  projectPageGetInitData,
  projectPageGetData,
  // createProject
} from './redux-modules/project-index/services';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN_SUBMIT, loginSubmit),
    yield takeLatest(GET_INIT_DATA, projectPageGetInitData),
    yield takeLatest(GET_DATA, projectPageGetData),
    // yield takeLatest(CREATE_PROJECT, createProject),
  ]);
}
