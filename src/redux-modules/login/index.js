import { READY, SUBMITTED } from '../../constant';
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILED, LOGIN_RESET } from './types';

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
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        status: SUBMITTED,
        response: {
          success: true,
          message: action.payload.message,
        },
      };
    case AUTHENTICATE_FAILED:
      status = action.payload.success ? SUBMITTED : state.status;
      return {
        ...state,
        response: {
          success: false,
          message: action.payload.message,
        },
      };
    case LOGIN_RESET:
      return {
        ...state,
        status: READY,
        isLoading: false,
        response: {
          status: null,
          message: '',
        },
      };
    default:
      return { ...state };
  }
}

export default login;
