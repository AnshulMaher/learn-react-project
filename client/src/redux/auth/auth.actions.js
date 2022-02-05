import {
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from './auth.types';

export const sign_up_start = (payload) => ({ type: SIGN_UP_START, payload });

export const sign_up_success = (payload) => ({ type: SIGN_UP_SUCCESS, payload });

export const sign_up_failure = (error) => ({ type: SIGN_UP_FAILURE, payload: error });

export const sign_in_start = (payload) => ({ type: SIGN_IN_START, payload });

export const sign_in_success = (payload) => ({ type: SIGN_IN_SUCCESS, payload });

export const sign_in_failure = (error) => ({ type: SIGN_IN_FAILURE, payload: error });

export const sign_out_start = () => ({ type: SIGN_OUT_START });

export const sign_out_success = () => ({ type: SIGN_OUT_SUCCESS });

export const sign_out_failure = (error) => ({ type: SIGN_OUT_FAILURE, payload: error });
