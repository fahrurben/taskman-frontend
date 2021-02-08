import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';

import {
  FETCH_INIT_DATA_START,
  FETCH_INIT_DATA_SUCCESS,
  FETCH_INIT_DATA_FAILED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED, FETCH_INIT_DATA,
} from './types';

function* fetchInitialData() {
  const page = 1;
  let response = null;
  try {
    yield put({ type: FETCH_INIT_DATA_START });
    response = yield post(`${API_URL}/task/search/${page}`, { name: '' });
    yield put({
      type: FETCH_INIT_DATA_SUCCESS,
      payload: {
        page,
        data: response.data.data,
        totalPage: response.data.totalPage,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: FETCH_INIT_DATA_FAILED, payload: { message: errorMessage } });
  }
}

function* fetchData(action) {
  const { page } = action;
  const { filter } = action;
  let response = null;
  try {
    yield put({ type: FETCH_DATA_START });
    response = yield post(`${API_URL}/task/search/${page}`, filter);
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: {
        page,
        data: response.data.data,
        totalPage: response.data.totalPage,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: FETCH_DATA_FAILED, payload: { message: errorMessage } });
  }
}

function* deleteTask(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: DELETE_TASK_START });
    response = yield get(`${API_URL}/task/${id}/delete`);
    yield put({
      type: DELETE_TASK_SUCCESS,
      payload: {
        data: response.data,
      },
    });
    yield put({ type: FETCH_INIT_DATA });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: DELETE_TASK_FAILED, payload: { message: errorMessage } });
  }
}

export {
  fetchInitialData,
  fetchData,
  deleteTask,
};
