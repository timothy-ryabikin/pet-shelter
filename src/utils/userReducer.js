import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user data",
  initialState,
  reducers: {
    loginRedux: (state) => {
      state.isLogin = true;
    },
    logoutRedux: (state) => {
      state.isLogin = false;
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
