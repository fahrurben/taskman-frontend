import {
  READY, SUBMITTED,
} from '../../constant';

import {
  CREATE_PROJECT_SUCCESS,
  PROJECT_ADD_RESET,
} from './types';

function reducer(state = {
  status: READY,
}, action) {
  switch (action.type) {
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        status: SUBMITTED,
      };
    case PROJECT_ADD_RESET:
      return {
        ...state,
        status: READY,
      };
    default:
      return { ...state };
  }
}

export default reducer;
