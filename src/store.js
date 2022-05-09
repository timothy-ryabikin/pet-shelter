import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
