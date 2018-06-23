import { combineReducers } from "redux";
import { resourcesReducer as resources } from "blue-chip";

import data from "./Data";

export default combineReducers({
  dataReducer: data,
  resources
});
