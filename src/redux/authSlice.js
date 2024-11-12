import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: null,
    lastName: null,
    userName: null,
    token: null,
    isConnected: "Login",
  },
  reducers: {
    setCredentials: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isConnected = action.payload.isConnected;
    },
    logout: (state) => {
      state.firstName = null
      state.lastName = null
      state.userName = null
      state.token = null
      state.isConnected = "Sign in"
    },
  },
});

export const { setCredentials, setToken, isConnected, logout } = authSlice.actions;
export default authSlice.reducer;