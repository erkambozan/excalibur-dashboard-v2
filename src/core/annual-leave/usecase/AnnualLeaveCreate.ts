import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { create } from "../gateway/AnnualLeaveGateway";

export const annualLeaveForUserCreate = createAsyncThunk<
    any,
    any,
    {
        state: RootState;
    }
>("annualLeave/annualLeaveCreate", async (data: any) => {
    return await create(data);
});
