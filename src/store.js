import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/userReducer";
import dataReducer from "./utils/dataReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});
