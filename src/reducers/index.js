import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import BaseReducer from "./BaseReducer";
import DashboardReducer from "./DashboardReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  base: BaseReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
