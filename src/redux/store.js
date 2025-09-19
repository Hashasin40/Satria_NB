import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./aboutSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});

export default store;