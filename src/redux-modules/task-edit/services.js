import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  UPDATE_TASK_START, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILED,
} from './types';

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  let getProjectResponse = null;
  try {
    yield put({ type: FETCH_INITIAL_DATA_START });
    getProjectResponse = yield get(`${API_URL}/project`);
    response = yield get(`${API_URL}/task/${id}`);
    yield put({
      type: FETCH_INITIAL_DATA_SUCCESS,
      payload: {
        task: response.data,
        projects: getProjectResponse.data,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: FETCH_INITIAL_DATA_FAILED, payload: { message: errorMessage } });
  }
}

function* updateTask(action) {
  const { id, data } = action;
  let response = null;
  try {
    yield put({ type: UPDATE_TASK_START });
    response = yield post(`${API_URL}/task/${id}`, data);
    yield put({
      type: UPDATE_TASK_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: UPDATE_TASK_FAILED, payload: { message: errorMessage } });
  }
}

export { fetchInitialData, updateTask };
