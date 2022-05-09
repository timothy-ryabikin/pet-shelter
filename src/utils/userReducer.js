import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
};

export const userSlice = createSlice({
  name: "user data",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
