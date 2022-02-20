import { createSlice } from "@reduxjs/toolkit";

const initialState = { alertType: null, message: null };

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    success(state, action) {
      state.alertType = "success";
      state.message = action.payload;
    },
    error(state, action) {
      state.alertType = "error";
      state.message = action.payload;
    },
    clear(state) {
      state.alertType = null;
      state.message = null;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
