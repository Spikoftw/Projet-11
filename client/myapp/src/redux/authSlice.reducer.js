import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  me: {},
  isLogged: false,
  isLoading: false,
  hasError: false,
  isEditing: false,
  editingHasError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.token = action.payload.token;
      state.me = action.payload.me;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    editingStart: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    editingSuccess: (state, action) => {
      state.isEditing = false;
      state.isLogged = true;
      state.me.userName = action.payload.userName;
    },
    editingFailure: (state) => {
      state.isEditing = false;
      state.editingHasError = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  editingStart,
  editingSuccess,
  editingFailure,
} = authSlice.actions;

export default authSlice.reducer;
