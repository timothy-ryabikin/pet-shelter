import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewRequestFormShown: false,
  isLostPetFormShowm: false,
  mapRef: null,
};

export const appSlice = createSlice({
  name: "app data",
  initialState,
  reducers: {
    hideOrShowNewRequestForm: (state) => {
      state.isLostPetFormShowm = false;
      state.isNewRequestFormShown = !state.isNewRequestFormShown;
    },
    hideOrShowLostPetForm: (state) => {
      state.isNewRequestFormShown = false;
      state.isLostPetFormShowm = !state.isLostPetFormShowm;
    },
    setMapRef: (state, action) => {
      state.mapRef = action.payload;
    },
  },
});

export const { hideOrShowNewRequestForm, hideOrShowLostPetForm, setMapRef } =
  appSlice.actions;

export default appSlice.reducer;
