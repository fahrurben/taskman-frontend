import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_SUCCESS,
  CREATE_TASK_SUCCESS,
} from './types';
import postActionCreator from '../create-action-helper/PostActionCreator';
import { FETCH_FAILED, FETCH_START, FETCH_SUCCESS } from '../status/types';

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: FETCH_START });
    response = yield get(`${API_URL}/project`);
    yield put({
      type: FETCH_INITIAL_DATA_SUCCESS,
      payload: {
        data: response.data,
      },
    });
    yield put({ type: FETCH_SUCCESS });
  } catch (e) {
    const errors = e?.response?.data;
    yield put({ type: FETCH_FAILED, payload: errors });
  }
}

function* createTask(action) {
  yield postActionCreator(`${API_URL}/task/`, CREATE_TASK_SUCCESS)(action);
}

export { fetchInitialData, createTask };
