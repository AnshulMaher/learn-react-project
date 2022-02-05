import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from './auth.types';

const initialState = { access_token: '', error: null };

function authReducer(current_state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return { access_token: payload, error: null };

    case SIGN_OUT_SUCCESS:
      return { access_token: '', error: null };

    case SIGN_UP_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return { ...current_state, error: payload };

    default:
      return current_state;
  }
}

export default authReducer;