import {put} from "redux-saga/effects"
import {post} from "../../helpers/AxiosWrapper"
import {
    API_URL,
} from "../../constant"

import {
    CREATE_PROJECT_START, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILED
} from "../types"

function* createProject(action) {
    let data = action.data
    let response = null
    try {
        yield put({type: CREATE_PROJECT_START})
        response = yield post(API_URL + '/project/', data)
        yield put({
            type: CREATE_PROJECT_SUCCESS,
            payload: {
                data: response.data,
            }
        })
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: CREATE_PROJECT_FAILED, payload: {message: errorMessage}})
    }
}

export {
    createProject
}