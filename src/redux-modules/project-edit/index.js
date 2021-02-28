import { handleActions } from 'redux-actions';
import {
  INITIAL, READY, SUBMITTED, SUCCESS,
} from '../../constant';

import {
  FETCH_INITIAL_DATA_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  PROJECT_EDIT_RESET,
} from './types';

const reducer = handleActions(
  new Map([
    [
      PROJECT_EDIT_RESET,
      (state, action) => ({
        ...state,
        status: INITIAL,
        project: null,
      }),
    ],

    [
      FETCH_INITIAL_DATA_SUCCESS,
      (state, action) => ({
        ...state,
        status: READY,
        project: action.payload.data,
      }),
    ],

    [
      UPDATE_PROJECT_SUCCESS,
      (state, action) => ({
        ...state,
        status: SUBMITTED,
      }),
    ],
  ]),
  {
    status: INITIAL,
    project: null,
  },
);
export default reducer;
