import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification.types';
let timerId;

export const hide_notification = () => ({ type: HIDE_NOTIFICATION });

export const show_notification = (payload) => (dispatch) => {
  timerId = setTimeout(() => {
    clearTimeout(timerId);
    dispatch({ type: HIDE_NOTIFICATION });
  }, 5000);
  dispatch({ type: SHOW_NOTIFICATION, payload });
};
