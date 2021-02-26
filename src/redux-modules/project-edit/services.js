import { call, put } from 'redux-saga/effects';
import { get, post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';
import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  UPDATE_PROJECT_SUCCESS,
} from './types';
import postActionCreator from '../create-action-helper/PostActionCreator';

function* receiveResponse(response) {
  yield put({
    type: FETCH_INITIAL_DATA_SUCCESS,
    payload: {
      data: response.data,
    },
  });
}

function* receiveErrors(exception) {
  const errorMessage = exception?.response?.data?.message;
  yield put({ type: FETCH_INITIAL_DATA_FAILED, payload: { message: errorMessage } });
}

function* fetchInitialData(action) {
  const { id } = action;
  let response = null;
  try {
    yield put({ type: FETCH_INITIAL_DATA_START });
    response = yield get(`${API_URL}/project/${id}`);
    yield call(receiveResponse, response);
  } catch (e) {
    yield call(receiveErrors, e);
  }
}

function* updateProject(action) {
  const { id } = action;
  yield postActionCreator(`${API_URL}/project/${id}`, UPDATE_PROJECT_SUCCESS)(action);
}

export { fetchInitialData, updateProject };
