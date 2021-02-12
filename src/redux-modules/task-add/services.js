import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  CREATE_TASK_START, CREATE_TASK_SUCCESS, CREATE_TASK_FAILED,
} from './types';

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: FETCH_INITIAL_DATA_START });
    response = yield get(`${API_URL}/project`);
    yield put({
      type: FETCH_INITIAL_DATA_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: FETCH_INITIAL_DATA_FAILED, payload: { message: errorMessage } });
  }
}

function* createTask(action) {
  const { data } = action;
  let response = null;
  try {
    yield put({ type: CREATE_TASK_START });
    response = yield post(`${API_URL}/task/`, data);
    yield put({
      type: CREATE_TASK_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: CREATE_TASK_FAILED, payload: { message: errorMessage } });
  }
}

export { fetchInitialData, createTask };
