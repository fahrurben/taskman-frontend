// eslint-disable-next-line import/named
import postActionCreator from '../create-action-helper/PostActionCreator';
import {
  API_URL,
} from '../../constant';

import {
  CREATE_PROJECT_SUCCESS,
} from './types';

function* createProject(action) {
  yield postActionCreator(`${API_URL}/project/`, CREATE_PROJECT_SUCCESS)(action);
}

export {
  createProject,
};
