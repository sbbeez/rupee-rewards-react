import { IS_LOADING_DASHBOARD, FETCH_DASHBOARD_DETAILS } from "./types";
import { getRequest } from "../utils/Apicalls";
import { FETCH_DASHBOARD_URL } from "../utils/ApiURLs";

//remove later
import dashboardDetails from "../mockData/DashboardData";

//actions
export const isLoadingDashboardAction = isLoading => {
  return {
    type: IS_LOADING_DASHBOARD,
    payload: isLoading
  };
};

export const fetchDashboardDetailsAction = () => {
  return async dispatch => {
    dispatch(isLoadingDashboardAction(true));
    // const data = await getRequest(FETCH_DASHBOARD_URL);
    // dispatch({ type: FETCH_DASHBOARD_DETAILS, payload: data });
    dispatch({ type: FETCH_DASHBOARD_DETAILS, payload: dashboardDetails }); //remove later
    dispatch(isLoadingDashboardAction(false));
  };
};
