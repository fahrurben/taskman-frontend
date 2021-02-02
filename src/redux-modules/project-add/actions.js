import {
  CREATE_PROJECT, PROJECT_ADD_RESET,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const createProject = makeActionCreator(CREATE_PROJECT, 'data');
export const resetProjectAdd = makeActionCreator(PROJECT_ADD_RESET);
