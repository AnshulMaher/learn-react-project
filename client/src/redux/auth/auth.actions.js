import { api_call, REQUEST_TYPE } from '../../api';
import { LOGIN, REGISTER } from '../../api/routes';
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

export const sign_up_success = (payload) => ({ type: SIGN_UP_SUCCESS, payload });

export const sign_up_failure = (error) => ({ type: SIGN_UP_FAILURE, payload: error });

export const sign_up_start = (credentials, cb) => (dispatch) => {
    dispatch({ type: SIGN_UP_START });

    api_call(REGISTER, REQUEST_TYPE.POST, {
        data: credentials
    })
        .then((response) => {
            dispatch(sign_up_success(response.token));
            if (typeof cb === 'function') cb();
        })
        .catch((error) => {
            dispatch(sign_up_failure(error.message));
        });
};

export const sign_in_success = (payload) => ({ type: SIGN_IN_SUCCESS, payload });

export const sign_in_failure = (error) => ({ type: SIGN_IN_FAILURE, payload: error });

export const sign_in_start = (credentials, cb) => (dispatch) => {
    dispatch({ type: SIGN_IN_START });
    api_call(LOGIN, REQUEST_TYPE.POST, {
        data: credentials
    })
        .then((response) => {
            dispatch(sign_in_success(response.token));
            if (typeof cb === 'function') cb();
        })
        .catch((error) => {
            dispatch(sign_in_failure(error.message));
        });
};

export const sign_out_success = () => ({ type: SIGN_OUT_SUCCESS });

export const sign_out_failure = (error) => ({ type: SIGN_OUT_FAILURE, payload: error });

export const sign_out_start = (cb) => (dispatch) => {
    try {
        dispatch({ type: SIGN_OUT_START });
        dispatch(sign_out_success());
        if (typeof cb === 'function') cb();
    } catch (error) {
        dispatch(sign_out_failure());
    }
};
