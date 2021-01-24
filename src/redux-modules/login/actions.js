import { LOGIN_SUBMIT } from './types';
import { makeActionCreator } from '../../helpers/Common';

export const loginSubmit = makeActionCreator(LOGIN_SUBMIT, 'payload');
