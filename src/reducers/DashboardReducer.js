import {
  IS_LOADING_DASHBOARD,
  FETCH_DASHBOARD_DETAILS
} from "../actions/types";

const INITIAL_STATE = {
  isLoadingDashboard: true,
  dashboardDetails: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING_DASHBOARD:
      return { ...state, isLoadingDashboard: action.payload };
    case FETCH_DASHBOARD_DETAILS:
      return { ...state, dashboardDetails: action.payload };
    default:
      return state;
  }
};
