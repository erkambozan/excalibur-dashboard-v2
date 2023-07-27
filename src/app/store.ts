import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../core/user/userSlice";
import { authSlice } from "../core/auth/authSlice";
import { employeeSlice } from "../core/employee/employeeSlice";
import { hierarchySlice } from "../core/hierarchy/hierarchySlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
  employee: employeeSlice.reducer,
  hierarchy: hierarchySlice.reducer,
});

export const configureStoreWith = () =>
  configureStore({
    reducer: rootReducer,
  });
