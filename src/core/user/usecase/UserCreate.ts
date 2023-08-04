import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../index";
import { create } from "../gateway/UserGateway";
import { UserMapper } from "../mapper/UserMapper";

export const userCreate = createAsyncThunk<
    any,
    any,
    {
        state: RootState;
    }
>("user/userCreate", async (data:any) => {
    const response = await create(data);
    return UserMapper.toViewModelList(response.data);
});