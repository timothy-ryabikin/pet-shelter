import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userData: {},
};

export const userSlice = createSlice({
  name: "user data",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
    },
    logoutRedux: (state) => {
      state.isLogin = false;
      state.userData = null;
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
