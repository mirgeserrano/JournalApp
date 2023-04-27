import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "Not-authenticated",
    uid: null,
    email: null,
    displayaName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      (state.status = "authenticated"),
        (state.uid = payload.uid),
        (state.email = payload.email),
        (state.displayaName = payload.displayaName),
        (state.photoURL = payload.photoURL),
        (state.errorMessage = payload.errorMessage);
    },
    logout: (state, { payload }) => {
      (state.status = "Not-authenticated"),
        (state.uid = null),
        (state.email = null),
        (state.displayaName = null),
        (state.photoURL = null),
        (state.errorMessage = payload.errorMessage);
    },
    checkingCredentials: (state) => {
      state.status = "cheking";
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
