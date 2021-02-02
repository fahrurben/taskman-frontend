import {
  FETCH_INIT_DATA,
  FETCH_DATA,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const fetchInitialData = makeActionCreator(FETCH_INIT_DATA);
export const fetchData = makeActionCreator(FETCH_DATA, 'page', 'filter');
