// eslint-disable-next-line import/named
import { ajaxPostFunctionCreator } from '../../helpers/AxiosWrapper';
import postActionCreator from '../create-action-helper/PostActionCreator';
import {
  API_URL,
} from '../../constant';

import {
  CREATE_PROJECT_SUCCESS,
} from './types';

function* createProject(action) {
  const ajaxFunction = ajaxPostFunctionCreator(`${API_URL}/project/`);
  const postActionFunction = postActionCreator(ajaxFunction, CREATE_PROJECT_SUCCESS);
  yield postActionFunction(action);
}

export {
  createProject,
};
