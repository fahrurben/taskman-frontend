import {
  GET_INIT_DATA,
  GET_DATA,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const getInitialData = makeActionCreator(GET_INIT_DATA);
export const getData = makeActionCreator(GET_DATA, 'page', 'filter');
