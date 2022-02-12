import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

export default rootReducer;
