import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./usecase/UserList";
import { UserEntity } from "./entity/User";

export const initialState = {
  users: [] as UserEntity[],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
