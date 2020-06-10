import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import storiiReducer from "./storiiReducer";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  storii: storiiReducer,
});
