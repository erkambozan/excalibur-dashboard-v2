import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./usecase/userList/userList";
import { UserEntity } from "./entity/user";

export const initialState = {
  users: [] as UserEntity[],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log("test slice extra reducer");
    });
  },
});

export const userReducer = userSlice.reducer;
