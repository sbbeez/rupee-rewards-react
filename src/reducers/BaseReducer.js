import { ON_COLLAPSE_CLICKED, ON_CHANGE_CONTENT } from "../actions/types";

const INITIAL_STATE = {
  collapsed: true,
  content: "Dashboard"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_COLLAPSE_CLICKED:
      return { ...state, collapsed: action.payload };
    case ON_CHANGE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};
