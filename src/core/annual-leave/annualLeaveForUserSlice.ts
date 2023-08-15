import { AnnualLeaveForUserProps } from "./entity/AnnualLeave";
import { createSlice } from "@reduxjs/toolkit";
import { annualLeaveListForUser } from "./usecase/AnnualLeaveList";

export const initialState = {
  annualLeaves: [] as AnnualLeaveForUserProps[],
  loading: false,
  error: "",
};

export const annualLeaveForUserSlice = createSlice({
  name: "annualLeaveForUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(annualLeaveListForUser.fulfilled, (state, action) => {
      state.annualLeaves = action.payload;
      state.loading = false;
    });
    builder.addCase(annualLeaveListForUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(annualLeaveListForUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});
