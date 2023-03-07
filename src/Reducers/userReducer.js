import { SET_USER } from "../actions/actionType";

// redux state
const INITIAL_STATE = {
  user: "0",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
