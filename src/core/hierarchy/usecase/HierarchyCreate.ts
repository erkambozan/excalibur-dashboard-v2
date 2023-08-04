import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { create } from "../gateway/HierarchyGateway";

export const hierarchyCreate = createAsyncThunk<
  any,
  any,
  {
    state: RootState;
  }
>("hierarchy/hierarchyCreate", async (data: any) => {
  return await create(data);
});
