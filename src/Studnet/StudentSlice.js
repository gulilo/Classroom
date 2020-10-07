import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  id: -1,
  name: "",
  likes: [],
  dislike: [],
};

const student = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent(state, { payload }) {
      if (payload) {
        return (state = payload);
      }
    },
    changeName(state, { payload }) {
      if (payload) {
        state.name = payload.newName;
      }
    },
    deleteLike(state, { payload }) {
      if (payload) {
        _.remove(state.likes, payload.toRemove);
      }
    },
    deleteDislike(state, { payload }) {
      if (payload) {
        _.remove(state.dislike, payload.toRemove);
      }
    },
    addLike(state, { payload }) {
      if (payload) {
        if (state.likes.length < 3) {
          state.likes.push(payload.toAdd);
        }
      }
    },
    addDislike(state, { payload }) {
      if (payload) {
        if (state.dislike.length < 3) {
          state.dislike.push(payload.toAdd);
        }
      }
    },
  },
});

export const {
  setStudent,
  changeName,
  deleteLike,
  deleteDislike,
  addLike,
  addDislike,
} = student.actions;
export default student.reducer;
