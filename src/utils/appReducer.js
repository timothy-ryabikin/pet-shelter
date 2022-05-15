import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewRequestFormShown: false,
  mapRef: null,
};

export const appSlice = createSlice({
  name: "app data",
  initialState,
  reducers: {
    hideOrShowNewRequestForm: (state) => {
      state.isNewRequestFormShown = !state.isNewRequestFormShown;
    },
    setMapRef: (state, action) => {
      state.mapRef = action.payload;
    },
  },
});

export const { hideOrShowNewRequestForm, setMapRef } = appSlice.actions;

export default appSlice.reducer;
