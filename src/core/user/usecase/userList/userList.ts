import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dependencies } from "../../../../app/dependencies";
import { RootState } from "../../../../index";
import { UserMapper } from "../../mapper/UserMapper";

export const userList = createAsyncThunk<
  any,
  void,
  {
    state: RootState;
    extra: Dependencies;
  }
>("user/userList", async (any, { extra: { userGatewayPort } }) => {
  console.log("async thunk worked");

  const users = await userGatewayPort.getAll();

  return UserMapper.toEntity(users[0]);
});
