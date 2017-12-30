import { ON_SIGN_UP_FIELD_CHANGE } from "../actions/types";
const INITIAL_STATE = {
  email: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SIGN_UP_FIELD_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
