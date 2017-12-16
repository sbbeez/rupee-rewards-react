import { ON_COLLAPSE_CLICKED } from "../actions/types";

const INITIAL_STATE = {
  collapsed: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_COLLAPSE_CLICKED:
      return { ...state, collapsed: action.payload };
    default:
      return state;
  }
};
