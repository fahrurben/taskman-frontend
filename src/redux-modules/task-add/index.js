import {
  INITIAL, READY, SUBMITTED, SUCCESS,
} from '../../constant';

import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  CREATE_TASK_START, CREATE_TASK_SUCCESS, CREATE_TASK_FAILED,
  TASK_ADD_RESET,
} from './types';
import { PROJECT_ADD_RESET } from '../project-add/types';

function reducer(state = {
  status: INITIAL,
  isLoading: false,
  projects: null,
  response: {
    status: null,
    message: '',
  },
}, action) {
  switch (action.type) {
    case FETCH_INITIAL_DATA_START:
    case CREATE_TASK_START:
      return {
        ...state,
        response: {
          status: null,
          message: '',
        },
        isLoading: true,
      };
    case TASK_ADD_RESET:
      return {
        ...state,
        isLoading: false,
        status: INITIAL,
        projects: null,
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
        projects: action.payload.data,
        response: {
          status: SUCCESS,
        },
      };
    case CREATE_TASK_SUCCESS:
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
    case CREATE_TASK_FAILED:
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
