import {
  FETCH_INIT_DATA_SUCCESS,
  FETCH_DATA_SUCCESS,
  FETCH_INIT_DATA_START,
  FETCH_DATA_START,
  FETCH_INIT_DATA_FAILED,
  FETCH_DATA_FAILED,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILED,
} from './types';

function reducer(state = {
  isLoading: false,
  data: [],
  page: 1,
  totalPage: 1,
}, action) {
  switch (action.type) {
    case FETCH_INIT_DATA_START:
    case FETCH_DATA_START:
    case DELETE_PROJECT_START:
      return { ...state, isLoading: true };
    case FETCH_INIT_DATA_SUCCESS:
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        page: action.payload.page,
        totalPage: action.payload.totalPage,
      };
    case FETCH_INIT_DATA_FAILED:
    case FETCH_DATA_FAILED:
    case DELETE_PROJECT_SUCCESS:
    case DELETE_PROJECT_FAILED:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
}

export default reducer;
