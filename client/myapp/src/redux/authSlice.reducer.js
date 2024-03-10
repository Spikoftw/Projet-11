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
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        token: action.payload.token,
        me: action.payload.me,
      };
    },
    loginFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    },
    editingStart: (state) => {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    },
    editingSuccess: (state, action) => {
      return {
        ...state,
        isEditing: false,
        isLogged: true,
        me: {
          ...state.me,
          userName: action.payload.userName,
        },
      };
    },
    editingFailure: (state) => {
      return {
        ...state,
        isEditing: false,
        editingHasError: true,
      };
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
