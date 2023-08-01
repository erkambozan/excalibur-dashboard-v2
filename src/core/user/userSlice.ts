import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./usecase/UserList";
import { CreateUserProps, UserProps } from "./entity/User";

export const initialState = {
  users: [] as UserProps[],
  selectedUser: {} as UserProps,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state=initialState, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { selectUser } = userSlice.actions;
