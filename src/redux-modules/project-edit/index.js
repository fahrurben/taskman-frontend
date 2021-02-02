import {
  INITIAL, READY, SUBMITTED, SUCCESS,
} from '../../constant';

import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  UPDATE_PROJECT_START, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILED,
  PROJECT_EDIT_RESET,
} from './types';

function reducer(state = {
  status: INITIAL,
  isLoading: false,
  project: null,
  response: {
    status: null,
    message: '',
  },
}, action) {
  switch (action.type) {
    case FETCH_INITIAL_DATA_START:
    case UPDATE_PROJECT_START:
      return { ...state, isLoading: true };
    case PROJECT_EDIT_RESET:
      return {
        ...state,
        isLoading: false,
        status: INITIAL,
        project: null,
        response: {
          status: null,
          message: '',
        },
      };
    case FETCH_INITIAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: READY,
        project: action.payload.data,
        response: {
          status: SUCCESS,
        },
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: SUBMITTED,
        response: {
          message: action.payload.message,
          status: SUCCESS,
        },
      };
    case FETCH_INITIAL_DATA_FAILED:
    case UPDATE_PROJECT_FAILED:
      return {
        ...state,
        isLoading: false,
        response: {
          status: SUCCESS,
          message: action.payload.message,
        },
      };
    default:
      return { ...state };
  }
}

export default reducer;
