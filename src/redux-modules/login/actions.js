import { AUTHENTICATE, LOGIN_RESET } from './types';
import { makeActionCreator } from '../../helpers/Common';

export const authenticate = makeActionCreator(AUTHENTICATE, 'data');
export const reset = makeActionCreator(LOGIN_RESET);
