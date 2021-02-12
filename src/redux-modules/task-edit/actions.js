import {
  TASK_EDIT_RESET,
  FETCH_INITIAL_DATA,
  UPDATE_TASK,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const fetchInitialData = makeActionCreator(FETCH_INITIAL_DATA, 'id');
export const updateTask = makeActionCreator(UPDATE_TASK, 'id', 'data');
export const resetEditTask = makeActionCreator(TASK_EDIT_RESET);
