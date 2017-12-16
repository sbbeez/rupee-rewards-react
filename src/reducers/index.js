import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BaseReducer from "./BaseReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  base: BaseReducer
});

export default rootReducer;
