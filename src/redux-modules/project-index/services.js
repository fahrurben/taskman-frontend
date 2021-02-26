import { put, call } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';

import {
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILED, FETCH_INIT_DATA,
} from './types';
import { FETCH_FAILED, FETCH_START, FETCH_SUCCESS } from '../status/types';
import { PROJECT_RESOURCES, SET_PAGINATION_RESOURCES } from '../types';

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
      type: PROJECT_RESOURCES,
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
    response = yield post(`${API_URL}/project/search/${page}`, { name: '' });
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
    response = yield post(`${API_URL}/project/search/${page}`, filter);
    yield call(receiveResponse, response, page);
  } catch (e) {
    yield call(receiveErrors, e);
  }
}

function* deleteProject(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: DELETE_PROJECT_START });
    response = yield get(`${API_URL}/project/${id}/delete`);
    yield put({
      type: DELETE_PROJECT_SUCCESS,
      payload: {
        data: response.data,
      },
    });
    yield put({ type: FETCH_INIT_DATA });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: DELETE_PROJECT_FAILED, payload: { message: errorMessage } });
  }
}

export {
  fetchInitialData,
  fetchData,
  deleteProject,
};
