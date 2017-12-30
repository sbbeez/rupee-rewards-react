import { POST_LOGIN } from "../utils/ApiURLs";
import { postRequest } from "../utils/Apicalls";
import { ON_SIGN_UP_FIELD_CHANGE } from "./types";
import message from "antd/lib/message";

export const onLoginAction = (email, password, history) => {
  return async dispatch => {
    const token = await postRequest(POST_LOGIN, { email, password });
    if (token) {
      localStorage.setItem("access_token", token.token);
      history.replace("/dashboard");
    } else {
      message.error("Credentials you have entered is wrong, Please try again");
    }
  };
};

export const onLoginFieldsChangeAction = ({ prop, value }) => {
  return {
    type: ON_SIGN_UP_FIELD_CHANGE,
    payload: { prop, value }
  };
};
