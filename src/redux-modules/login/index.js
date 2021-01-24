import { READY, SUBMITTED } from '../../constant';
import { LOGIN_SUBMIT_DONE } from './types';

function login(state = {
  status: READY,
  isLoading: false,
  response: {
    success: null,
    message: '',
  },
}, action) {
  let status = null;

  switch (action.type) {
    case LOGIN_SUBMIT_DONE:
      status = action.payload.success ? SUBMITTED : state.status;
      return {
        ...state,
        status,
        response: {
          success: action.payload.success,
          message: action.payload.message,
        },
      };
    default:
      return { ...state };
  }
}

export default login;
