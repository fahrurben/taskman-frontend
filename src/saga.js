import {takeLatest, all} from 'redux-saga/effects';

import {
    LOGIN_SUBMIT,
    PROJECT_PAGE_GET_INIT_DATA,
    PROJECT_PAGE_GET_DATA
} from './constant';

import {
    loginSubmit,
} from './services/LoginService';

import {
    projectPageGetInitData,
    projectPageGetData
} from './services/ProjectService';


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        yield takeLatest(LOGIN_SUBMIT, loginSubmit),
        yield takeLatest(PROJECT_PAGE_GET_INIT_DATA, projectPageGetInitData),
        yield takeLatest(PROJECT_PAGE_GET_DATA, projectPageGetData),
    ])
}