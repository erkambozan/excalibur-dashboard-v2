import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { create } from "../gateway/EmployeeGateway";

export const employeeCreate = createAsyncThunk<
  any,
  any,
  {
    state: RootState;
  }
>("employee/employeeCreate", async (data: any, { rejectWithValue }) => {
  return await create(data);
});
