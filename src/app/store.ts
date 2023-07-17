import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../core/user/userSlice";
import { authSlice } from "../core/auth/authSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
});

export const configureStoreWith = () =>
  configureStore({
    reducer: rootReducer,
  });
