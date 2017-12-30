import {
  FETCH_USER_DETAILS_TYPE,
  IS_LOADING_USER_DETAILS_TYPE
} from "../actions/types";

const INITIAL_STATE = {
  isLoadingUserDetails: false,
  userDetails: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_TYPE:
      return { ...state, userDetails: action.payload };
    case IS_LOADING_USER_DETAILS_TYPE:
      return { ...state, isLoadingUserDetails: action.payload };
    default:
      return state;
  }
};
