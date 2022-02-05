import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import notificationReducer from './notification/notification.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  notification: notificationReducer
});

export default rootReducer;
