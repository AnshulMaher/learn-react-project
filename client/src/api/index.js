import axios from 'axios';
import { FAKE_API_URL } from '../config';
import { sign_out_success } from '../redux/auth/auth.actions';
import store from '../redux/store';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      alert('Token Expired');
      store?.dispatch(sign_out_success());
    } else {
      return Promise.reject(error);
    }
  }
);

/**
 * Request Types
 */
export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post'
};

/**
 * Perform API Calls
 * @param {string} end_point end point of the url
 * @param {string} method request type
 * @param {{ isAuthorized: boolean, isForm: boolean, data: object, serviceURL: string }} [options] options
 */
export function api_call(end_point, method, options = {}) {
  const { isForm = false, data, serviceURL } = options;
  const url = `${serviceURL || FAKE_API_URL}${end_point}`;
  const headers = {
    'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
    Authorization: store?.getState()?.auth.access_token
  };

  return new Promise((resolve, reject) => {
    axios({ method, url, headers, data })
      .then((response) => {
        let { data: responseData } = response;
        if (response) {
        } else {
          alert(responseData.message ? responseData.message : 'Something went wrong!', 'error');
        }
        resolve(responseData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
