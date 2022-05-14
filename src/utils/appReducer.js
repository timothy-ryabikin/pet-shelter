import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddRequestFormShown: false,
};

export const appSlice = createSlice({
  name: "app data",
  initialState,
  reducers: {
    a: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
    },
  },
});

export const { a } = appSlice.actions;

export default appSlice.reducer;
