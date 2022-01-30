import { SET_USER_LIST } from "./user.types";

const initialState = { user_list: [] };

function userReducer(current_state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_LIST:
      return { ...current_state, user_list: payload };

    default:
      return current_state;
  }
}

export default userReducer;