import {put} from "redux-saga/effects"
import axios from "axios"
import {post} from "./AxiosWrapper"
import {
    API_URL,
    PROJECT_PAGE_GET_INIT_DATA_START,
    PROJECT_PAGE_GET_INIT_DATA_SUCCESS,
    PROJECT_PAGE_GET_INIT_DATA_FAILED,
    PROJECT_PAGE_GET_DATA_START,
    PROJECT_PAGE_GET_DATA_SUCCESS,
    PROJECT_PAGE_GET_DATA_FAILED
} from "../constant"

function* projectPageGetInitData(action) {
    let page = 1
    let response = null;
    try {
        yield put({type: PROJECT_PAGE_GET_INIT_DATA_START})
        response = yield post(API_URL + '/project/search/' + page, {name: ''})
        yield put({
            type: PROJECT_PAGE_GET_INIT_DATA_SUCCESS,
            payload: {
                page: page,
                data: response.data.data,
                totalPage: response.data.totalPage
            }
        })
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: PROJECT_PAGE_GET_INIT_DATA_FAILED, payload: {message: errorMessage}})
    }
}

function* projectPageGetData(action) {
    let page = action.page
    let filter = action.filter
    let response = null
    try {
        yield put({type: PROJECT_PAGE_GET_DATA_START})
        response = yield post(API_URL + '/project/search/' + page, filter)
        yield put({
            type: PROJECT_PAGE_GET_DATA_SUCCESS,
            payload: {
                page: page,
                data: response.data.data,
                totalPage: response.data.totalPage
            }
        })
    } catch (e) {
        const errorMessage = e?.response?.data?.message
        yield put({type: PROJECT_PAGE_GET_DATA_FAILED, payload: {message: errorMessage}})
    }
}


export {
    projectPageGetInitData,
    projectPageGetData
}