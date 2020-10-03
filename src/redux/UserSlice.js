import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, { payload }) {
      return (state = payload);
    },
  },
});
export const { setUser } = user.actions;

export default user.reducer;
