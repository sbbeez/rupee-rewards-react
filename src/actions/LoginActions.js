import { POST_LOGIN } from "../utils/ApiURLs";
import { postRequest } from "../utils/Apicalls";
export const onLoginAction = (email, password) => {
  return async dispatch => {
    const { token } = await postRequest(POST_LOGIN, { email, password });
  };
};
