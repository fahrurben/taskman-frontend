import { combineActions, handleActions } from 'redux-actions';
import {
  FETCH_INIT_DATA_SUCCESS,
  FETCH_DATA_SUCCESS,
} from './types';

const reducer = handleActions(
  {
    [combineActions(FETCH_INIT_DATA_SUCCESS, FETCH_DATA_SUCCESS)]: (
      state,
      { payload: { data, page, totalPage } },
    ) => ({
      ...state, data, page, totalPage,
    }),
  },
  {
    isLoading: false,
    data: [],
    page: 1,
    totalPage: 1,
  },
);

export default reducer;
