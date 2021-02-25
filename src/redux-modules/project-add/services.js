import { put } from 'redux-saga/effects';
import { post } from '../../helpers/AxiosWrapper';
import {
  API_URL,
} from '../../constant';

import {
  CREATE_PROJECT_START, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILED,
} from './types';
import { POST_FAILED, POST_START, POST_SUCCESS } from '../status/types';

function* createProject(action) {
  const { data } = action;
  let response = null;
  try {
    yield put({ type: POST_START });
    response = yield post(`${API_URL}/project/`, data);
    yield put({
      type: CREATE_PROJECT_SUCCESS,
      payload: {
        data: response.data,
      },
    });
    yield put({ type: POST_SUCCESS });
  } catch (e) {
    const errors = e?.response?.data;
    yield put({ type: POST_FAILED, payload: errors });
  }
}

export {
  createProject,
};
