import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { UserMapper } from "../mapper/UserMapper";
import { getAll } from "../gateway/UserGateway";

export const userList = createAsyncThunk<
  any,
  void,
  {
    state: RootState;
  }
>("user/userList", async (any) => {
  const response = await getAll();
  return UserMapper.toViewModelList(response.data);
});
