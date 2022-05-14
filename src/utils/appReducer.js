import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewRequestFormShown: false,
};

export const appSlice = createSlice({
  name: "app data",
  initialState,
  reducers: {
    hideOrShowNewRequestForm: (state) => {
      state.isNewRequestFormShown = !state.isNewRequestFormShown;
    },
  },
});

export const { hideOrShowNewRequestForm } = appSlice.actions;

export default appSlice.reducer;
