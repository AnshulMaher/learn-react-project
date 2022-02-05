import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from './notification.types';

const initialState = { show: false, message: '' };

function notificationReducer(current_state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_NOTIFICATION:
      return { show: true, message: payload };

    case HIDE_NOTIFICATION:
      return { show: false, message: '' };
    default:
      return current_state;
  }
}

export default notificationReducer;
