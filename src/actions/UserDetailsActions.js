import { FETCH_USER_DETAILS_TYPE, IS_LOADING_USER_DETAILS_TYPE } from "./types";
import { getRequest } from "../utils/Apicalls";
import { FETCH_USER_DETAILS_URL } from "../utils/ApiURLs";

//Mock data imports, should be removed later
import userDetails from "../mockData/UserDetailsData";

export const isLoadingUserDetails = isLoading => {
  return {
    type: IS_LOADING_USER_DETAILS_TYPE,
    payload: isLoading
  };
};

export const fetchUserDetailsAction = id => {
  return async dispatch => {
    dispatch(isLoadingUserDetails(true));
    // const userDetails = await getRequest(`${FETCH_USER_DETAILS_URL}${id}`);
    dispatch({ type: FETCH_USER_DETAILS_TYPE, payload: userDetails });
    dispatch(isLoadingUserDetails(false));
  };
};
