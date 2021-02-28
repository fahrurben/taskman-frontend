import { handleActions } from 'redux-actions';
import { INITIAL, SUBMITTED } from '../../constant';
import { CREATE_TASK_SUCCESS, TASK_ADD_RESET } from './types';

const reducer = handleActions(
  new Map([
    [
      TASK_ADD_RESET,
      (state, action) => ({
        ...state,
        status: INITIAL,
      }),
    ],
    [
      CREATE_TASK_SUCCESS,
      (state, action) => ({
        ...state,
        status: SUBMITTED,
      }),
    ],
  ]),
  {
    status: INITIAL,
  },
);
export default reducer;
