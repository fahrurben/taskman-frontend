import {put} from "redux-saga/effects"
import {post} from "../../helpers/AxiosWrapper"
import {
    API_URL,
} from "../../constant"

import {
    GET_INIT_DATA_START,
    GET_INIT_DATA_SUCCESS,
    GET_INIT_DATA_FAILED,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
} from "./types"

function* projectPageGetInitData(action) {
    let page = 1
    let response = null;
    try {
        yield put({type: GET_INIT_DATA_START})
        response = yield post(API_URL + '/project/search/' + page, {name: ''})
        yield put({
            type: GET_INIT_DATA_SUCCESS,
            payload: {
                page: page,
                data: response.data.data,
                totalPage: response.data.totalPage
            }
        })
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: GET_INIT_DATA_FAILED, payload: {message: errorMessage}})
    }
}

function* projectPageGetData(action) {
    let page = action.page
    let filter = action.filter
    let response = null
    try {
        yield put({type: GET_DATA_START})
        response = yield post(API_URL + '/project/search/' + page, filter)
        yield put({
            type: GET_DATA_SUCCESS,
            payload: {
                page: page,
                data: response.data.data,
                totalPage: response.data.totalPage
            }
        })
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: GET_DATA_FAILED, payload: {message: errorMessage}})
    }
}

export {
    projectPageGetInitData,
    projectPageGetData,
}