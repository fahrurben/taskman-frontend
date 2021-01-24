import {put} from "redux-saga/effects"
import axios from "axios"


import {API_URL, AUTH_TOKEN_KEY} from "../../constant"
import {LOGIN_SUBMIT_START, LOGIN_SUBMIT_DONE} from "./types"

function* loginSubmit(action) {
    const email = action.payload.email;
    const password = action.payload.password;

    let response = null;
    try {
        yield put({type: LOGIN_SUBMIT_START})
        response = yield axios.post(API_URL + '/login', {email, password})
        localStorage.setItem(AUTH_TOKEN_KEY, response?.data?.token)
        yield put({type: LOGIN_SUBMIT_DONE, payload: {success: true, message: ''}})
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: LOGIN_SUBMIT_DONE, payload: {success: false, message: errorMessage}})
    }
}

export {
    loginSubmit
}