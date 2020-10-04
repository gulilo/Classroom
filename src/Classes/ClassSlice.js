import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = { id: -1, name: "", students: [] };

const classes = createSlice({
  name: "classes",
  initialState,
  reducers: {
    setClass(state, { payload }) {
      if (payload) {
        return (state = payload);
      }
    },
    addStudent(state, { payload }) {
      if (payload) {
        state.students.push(payload);
      }
    },
  },
});

export const { setClass, addStudent } = classes.actions;
export default classes.reducer;
