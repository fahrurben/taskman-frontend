import {
  CREATE_TASK,
  FETCH_INITIAL_DATA,
  TASK_ADD_RESET,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const fetchInitialData = makeActionCreator(FETCH_INITIAL_DATA);
export const createTask = makeActionCreator(CREATE_TASK, 'data');
export const taskAddReset = makeActionCreator(TASK_ADD_RESET);
