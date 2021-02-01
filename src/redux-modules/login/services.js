import { put } from 'redux-saga/effects';
import axios from 'axios';

import { API_URL, AUTH_TOKEN_KEY } from '../../constant';
import { AUTHENTICATE_START, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILED } from './types';

function* authenticate(action) {
  const { email, password } = action.data;

  let response = null;
  try {
    yield put({ type: AUTHENTICATE_START });
    response = yield axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem(AUTH_TOKEN_KEY, response?.data?.token);
    yield put({ type: AUTHENTICATE_SUCCESS, payload: { success: true, message: '' } });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: AUTHENTICATE_FAILED, payload: { success: false, message: errorMessage } });
  }
}

export {
  authenticate,
};
