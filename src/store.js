import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/userReducer";
import dataReducer from "./utils/dataReducer";
import appReducer from "./utils/appReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    app: appReducer,
  },
});
