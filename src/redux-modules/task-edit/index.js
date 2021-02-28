import { handleActions } from 'redux-actions';
import {
  INITIAL, READY, SUBMITTED, SUCCESS,
} from '../../constant';

import {
  FETCH_INITIAL_DATA_SUCCESS,
  UPDATE_TASK_SUCCESS,
  TASK_EDIT_RESET,
} from './types';

const reducer = handleActions(
  new Map([
    [
      TASK_EDIT_RESET,
      (state, action) => ({
        ...state,
        status: INITIAL,
        task: null,
      }),
    ],
    [
      FETCH_INITIAL_DATA_SUCCESS,
      (state, action) => {
        console.log(action);
        return {
          ...state,
          status: READY,
          task: action.payload.task,
        };
      },
    ],
    [
      UPDATE_TASK_SUCCESS,
      (state, action) => ({
        ...state,
        status: SUBMITTED,
      }),
    ],
  ]),
  {
    status: INITIAL,
    task: null,
  },
);
export default reducer;
