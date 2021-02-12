import {
  INITIAL, READY, SUBMITTED, SUCCESS,
} from '../../constant';

import {
  FETCH_INITIAL_DATA_START, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_FAILED,
  UPDATE_TASK_START, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILED,
  TASK_EDIT_RESET,
} from './types';

function reducer(state = {
  status: INITIAL,
  isLoading: false,
  task: null,
  projects: null,
  response: {
    status: null,
    message: '',
  },
}, action) {
  switch (action.type) {
    case FETCH_INITIAL_DATA_START:
    case UPDATE_TASK_START:
      return {
        ...state,
        response: {
          status: null,
          message: '',
        },
        isLoading: true,
      };
    case TASK_EDIT_RESET:
      return {
        ...state,
        isLoading: false,
        status: INITIAL,
        task: null,
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
        projects: action.payload.projects,
        task: action.payload.task,
        response: {
          status: SUCCESS,
        },
      };
    case UPDATE_TASK_SUCCESS:
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
    case UPDATE_TASK_FAILED:
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
