import { AUTH_TOKEN_KEY } from '../constant';
import { post } from './AxiosWrapper';

function getHeaderConfig() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
    },
  };
}

export { getHeaderConfig };
