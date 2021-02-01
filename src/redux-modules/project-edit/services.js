import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  UPDATE_PROJECT_START, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILED,
} from './types';

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: FETCH_INITIAL_DATA_START });
    response = yield get(`${API_URL}/project/${id}`);
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

function* updateProject(action) {
  const { id, data } = action;
  let response = null;
  try {
    yield put({ type: UPDATE_PROJECT_START });
    response = yield post(`${API_URL}/project/${id}`, data);
    yield put({
      type: UPDATE_PROJECT_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: UPDATE_PROJECT_FAILED, payload: { message: errorMessage } });
  }
}

export { fetchInitialData, updateProject };
