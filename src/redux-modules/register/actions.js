import { REGISTER, REGISTER_RESET } from './types';
import { makeActionCreator } from '../../helpers/Common';

export const register = makeActionCreator(REGISTER, 'data');
export const reset = makeActionCreator(REGISTER_RESET);
