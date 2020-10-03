import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();

export default store;
