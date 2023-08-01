import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { getAll } from "../gateway/HierarchyGateway";
import { HierarchyMapper } from "../mapper/HierarchyMapper";

export const hierarchyList = createAsyncThunk<
  any,
  void,
  {
    state: RootState;
  }
>("hierarchy/hierarchyList", async (any) => {
  const hierarchies = await getAll();
  return HierarchyMapper.toViewModeList(hierarchies.data);
});
