import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: null,
    lastName: null,
    isUserSignedInOut: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isUserSignedInOut = action.payload.isUserSignedInOut;
    },
    logout: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.isUserSignedInOut = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
