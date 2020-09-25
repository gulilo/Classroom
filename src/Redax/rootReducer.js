import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "../Student/StudentSlise";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
