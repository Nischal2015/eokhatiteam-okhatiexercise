import { createSlice } from "@reduxjs/toolkit";
let user = localStorage.getItem("email");

const initialState = user
  ? { isLogging: false, loggedIn: true, user, isRegistering: false }
  : {
      user,
      loggedIn: null,
      isLogging: false,
      isRegistering: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action) {
      state.isLogging = true;
    },
    loginSuccess(state, action) {
      state.loggedIn = true;
      state.user = action.payload.email;
      state.isLogging = false;
    },
    loginFail(state) {
      state.isLogging = false;
    },
    signupRequest(state) {
      state.isRegistering = true;
    },
    signupSuccess(state) {
      state.isRegistering = false;
    },
    signupFailed(state) {
      state.isRegistering = false;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
