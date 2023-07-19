import { EmployeeEntity, EmployeeProps } from "./entity/Employee";
import { createSlice } from "@reduxjs/toolkit";
import { employeeList } from "./usecase/EmployeeList";

export const initialState = {
  employees: [] as EmployeeProps[],
  loading: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(employeeList.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });

    builder.addCase(employeeList.pending, (state, action) => {
      state.loading = true;
    });
  },
});
