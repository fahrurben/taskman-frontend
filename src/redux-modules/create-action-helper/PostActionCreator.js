import { put } from 'redux-saga/effects';
import { POST_FAILED, POST_START, POST_SUCCESS } from '../status/types';
import { ajaxPostFunctionCreator } from '../../helpers/AxiosWrapper';

function createAction(url, successActionType) {
  const ajaxFunction = ajaxPostFunctionCreator(url);
  return function* createProject(action) {
    const { data } = action;
    let response = null;
    try {
      yield put({ type: POST_START });
      // response = yield post(`${API_URL}/project/`, data);
      response = yield ajaxFunction(data);
      yield put({
        type: successActionType,
        payload: response.data,
      });
      yield put({ type: POST_SUCCESS });
    } catch (e) {
      const errors = e?.response?.data;
      yield put({ type: POST_FAILED, payload: errors });
    }
  };
}

export default createAction;
