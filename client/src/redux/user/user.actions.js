import { api_call, REQUEST_TYPE } from '../../api';
import { USERS } from '../../api/routes';
import { SET_USER_LIST } from './user.types';

export const get_users_list = (page, cb) => (dispatch) => {
  api_call(`${USERS}?page=${page}&per_page=4`, REQUEST_TYPE.GET).then((response) => {
    dispatch({ type: SET_USER_LIST, payload: response.data });
    if(typeof cb === 'function') cb(response);
  });
};
