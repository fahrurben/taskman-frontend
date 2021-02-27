import { call, put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';

import {
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED, FETCH_INIT_DATA,
} from './types';
import { SET_PAGINATION_RESOURCES, TASK_RESOURCES } from '../types';
import { FETCH_FAILED, FETCH_START, FETCH_SUCCESS } from '../status/types';

function* receiveResponse(response, page, filter) {
  yield put({
    type: SET_PAGINATION_RESOURCES,
    payload: {
      data: response.data.data,
      page,
      totalPage: response.data.totalPage,
      perPage: response.data.perPage,
    },
    meta: {
      type: TASK_RESOURCES,
    },
  });
  yield put({ type: FETCH_SUCCESS });
}

function* receiveErrors(exception) {
  const errors = exception?.response?.data;
  yield put({ type: FETCH_FAILED, payload: errors });
}

function* fetchInitialData() {
  const page = 1;
  let response = null;
  try {
    yield put({ type: FETCH_START });
    response = yield post(`${API_URL}/task/search/${page}`, { name: '' });
    yield call(receiveResponse, response, page);
  } catch (e) {
    yield call(receiveErrors, e);
  }
}

function* fetchData(action) {
  const { page } = action;
  const { filter } = action;
  let response = null;
  try {
    yield put({ type: FETCH_START });
    response = yield post(`${API_URL}/task/search/${page}`, filter);
    yield call(receiveResponse, response, page);
  } catch (e) {
    yield call(receiveErrors, e);
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
