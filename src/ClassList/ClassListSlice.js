import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = [];

const classList = createSlice({
  name: "classList",
  initialState,
  reducers: {
    setClassList(state, { payload }) {
      if (payload) {
        return (state = payload); // why return?!
      }
    },
    addClass(state, { payload }) {
      if (payload) {
        state.push(payload);
      }
    },
  },
});

export const { setClassList, addClass } = classList.actions;
export default classList.reducer;
