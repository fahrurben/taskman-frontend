import axios from 'axios';
import { AUTH_TOKEN_KEY } from '../constant';

function post(url, data) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
    },
  };
  return axios.post(url, data, config);
}

function get(url) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
    },
  };
  return axios.get(url, config);
}

export { get, post };
