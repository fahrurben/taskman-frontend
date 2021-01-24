import {
  CREATE_PROJECT, CREATE_PROJECT_RESET,
} from './types';
import { makeActionCreator } from '../../helpers/Common';

export const createProject = makeActionCreator(CREATE_PROJECT, 'data');
export const resetCreateProject = makeActionCreator(CREATE_PROJECT_RESET);
