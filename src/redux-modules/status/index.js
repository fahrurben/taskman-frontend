import {
  FETCH_FAILED, FETCH_START, FETCH_SUCCESS, POST_FAILED, POST_START, POST_SUCCESS,
} from './types';

function reducer(state = {
  loading: false,
  errors: null,
}, action) {
  switch (action.type) {
    case FETCH_START:
    case POST_START:
      return { ...state, loading: false, errors: null };
    case FETCH_SUCCESS:
    case POST_SUCCESS:
      return { ...state, loading: false, errors: null };
    case FETCH_FAILED:
    case POST_FAILED:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
}

export default reducer;
