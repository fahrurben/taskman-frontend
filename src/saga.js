import {takeLatest, all} from 'redux-saga/effects';

import {
    LOGIN_SUBMIT,
} from './constant';

import {
    loginSubmit,
} from './services/LoginService';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        yield takeLatest(LOGIN_SUBMIT, loginSubmit),
    ])
}