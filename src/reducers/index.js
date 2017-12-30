import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BaseReducer from "./BaseReducer";
import DashboardReducer from "./DashboardReducer";
import UserDetailReducer from "./UserDetailReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  base: BaseReducer,
  dashboard: DashboardReducer,
  userdetails: UserDetailReducer
});

export default rootReducer;
