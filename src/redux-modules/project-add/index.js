import { handleActions } from 'redux-actions';
import {
  INITIAL,
  SUBMITTED,
} from '../../constant';

import {
  CREATE_PROJECT_SUCCESS,
  PROJECT_ADD_RESET,
} from './types';

const reducer = handleActions(
  new Map([
    [
      PROJECT_ADD_RESET,
      (state, action) => ({
        ...state,
        status: INITIAL,
      }),
    ],

    [
      CREATE_PROJECT_SUCCESS,
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
