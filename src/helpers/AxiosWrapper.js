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

function ajaxPostFunctionCreator(url) {
  return function ajaxFunction(data) {
    return post(url, data);
  };
}

export { get, post, ajaxPostFunctionCreator };
