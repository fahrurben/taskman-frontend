import { put } from 'redux-saga/effects';
import axios from 'axios';

import { API_URL } from '../../constant';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from './types';

function* register(action) {
  const {
    email, password, firstName, lastName,
  } = action.data;

  let response = null;
  try {
    yield put({ type: REGISTER_START });
    response = yield axios.post(`${API_URL}/register`, {
      email, password, firstName, lastName,
    });
    yield put({ type: REGISTER_SUCCESS, payload: { success: true, message: '' } });
  } catch (e) {
    const errorMessage = e?.response?.data?.message;
    yield put({ type: REGISTER_FAILED, payload: { success: false, message: errorMessage } });
  }
}

export {
  register,
};
