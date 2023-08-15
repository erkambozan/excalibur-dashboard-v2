import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { getAll } from "../gateway/AnnualLeaveGateway";
import { AnnualLeaveMapper } from "../mapper/AnnualLeaveMapper";

export const annualLeaveListForUser = createAsyncThunk<
  any,
  void,
  {
    state: RootState;
  }
>("annualLeave/annualLeaveListForUser", async (any) => {
  const annualLeaves = await getAll();
  return AnnualLeaveMapper.toViewModelListForUser(annualLeaves.data);
});
