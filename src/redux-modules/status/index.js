import { FETCH_FAILED, FETCH_START, FETCH_SUCCESS } from './types';

function reducer(state = {
  loading: false,
  errors: null,
}, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, errors: null };
    case FETCH_FAILED:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
}

export default reducer;
