import { put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_SUCCESS,
  UPDATE_TASK_SUCCESS,
} from './types';
import { FETCH_FAILED, FETCH_START } from '../status/types';
import postActionCreator from '../create-action-helper/PostActionCreator';
import { PROJECT_LOOKUPS, SET_LOOKUP_RESOURCES } from '../types';

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: FETCH_START });
    response = yield get(`${API_URL}/project`);
    yield put({
      type: SET_LOOKUP_RESOURCES,
      payload: response.data,
      meta: {
        type: PROJECT_LOOKUPS,
      },
    });
    response = yield get(`${API_URL}/task/${id}`);
    yield put({
      type: FETCH_INITIAL_DATA_SUCCESS,
      payload: {
        task: response.data,
      },
    });
  } catch (e) {
    const errors = e?.response?.data;
    yield put({ type: FETCH_FAILED, payload: errors });
  }
}

function* updateTask(action) {
  const { id } = action;
  yield postActionCreator(`${API_URL}/task/${id}`, UPDATE_TASK_SUCCESS)(action);
}

export { fetchInitialData, updateTask };
