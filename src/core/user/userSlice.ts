import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./usecase/UserList";
import { UserCreateRequestProps, UserProps } from "./entity/User";

export const initialState = {
  users: [] as UserProps[],
  selectedUser: {} as UserProps,
  userCreateProps: {} as UserCreateRequestProps,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state = initialState, action) => {
      state.selectedUser = action.payload;
    },
    setUserCreateEmail: (state = initialState, action) => {
      state.userCreateProps.email = action.payload;
    },
    setUserCreateUserName: (state = initialState, action) => {
      state.userCreateProps.userName = action.payload;
    },
    setUserCreateFirstName: (state = initialState, action) => {
      state.userCreateProps.firstName = action.payload;
    },
    setUserCreateLastName: (state = initialState, action) => {
      state.userCreateProps.lastName = action.payload;
    },
    setUserCreatePassword: (state = initialState, action) => {
      state.userCreateProps.password = action.payload;
    },
    setUserCreatePhone: (state = initialState, action) => {
      state.userCreateProps.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const {
  selectUser,
  setUserCreateEmail,
  setUserCreateUserName,
  setUserCreateFirstName,
  setUserCreateLastName,
  setUserCreatePassword,
  setUserCreatePhone,
} = userSlice.actions;
