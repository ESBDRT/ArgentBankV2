import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: null,
    lastName: null,
    userName: null,
    isConnected: "Login",
  },
  reducers: {
    setCredentials: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName
    },
    setConnected: (state, action) => {
      state.isConnected = action.payload.isConnected;
    },
    logout: (state) => {
      state.firstName = null
      state.lastName = null
      state.userName = null
      state.isConnected = "Sign in"
    },
  },
});

export const { setCredentials, setConnected, isConnected, logout } = authSlice.actions;
export default authSlice.reducer;