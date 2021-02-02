import {
  PROJECT_EDIT_RESET,
  FETCH_INITIAL_DATA,
  UPDATE_PROJECT,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const fetchInitialData = makeActionCreator(FETCH_INITIAL_DATA, 'id');
export const updateProject = makeActionCreator(UPDATE_PROJECT, 'id', 'data');
export const resetEditProject = makeActionCreator(PROJECT_EDIT_RESET);
