import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./usecase/loginUser";
import { tokenValidation } from "../../app/tokenValidation";

interface UserState {
  token: string; // Replace 'any' with the actual type of your user data
  error: string | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export const initialState = {
  token: "",
  error: null,
  loading: false,
  isAuthenticated: false,
} as UserState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.error = null;
      state.loading = false;
      sessionStorage.setItem("token", "");
      state.isAuthenticated = false;
      window.open("/login", "_self");
    },
    isAuth: (state) => {
        const isTokenValidated = tokenValidation();
        if (isTokenValidated) {
            state.isAuthenticated = true;
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      localStorage.setItem("token", action.payload.access_token);
      state.error = null;
      state.loading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;
