import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../core/user/userSlice";
import { authSlice } from "../core/auth/authSlice";
import { employeeSlice } from "../core/employee/employeeSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
  employee: employeeSlice.reducer,
});

export const configureStoreWith = () =>
  configureStore({
    reducer: rootReducer,
  });
