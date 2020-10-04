import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "../Studnet/StudentSlice";
import classListReducer from "../ClassList/ClassListSlice";
import classesReducer from "../Classes/ClassSlice";

const rootReducer = combineReducers({
  student: studentReducer,
  classList: classListReducer,
  classes: classesReducer,
});

export default rootReducer;
