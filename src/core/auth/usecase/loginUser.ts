import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { routesV1 } from "../../../app/apiRoutes";

export interface User {
  userName: string;
  password: string;
}

async function postData({ userName, password }: User) {
  console.log(
    process.env.REACT_APP_BASE_BACKEND + routesV1.version + routesV1.auth.login
  );
  return await axios({
    method: "POST",
    url:
      process.env.REACT_APP_BASE_BACKEND +
      routesV1.version +
      routesV1.auth.login,

    data: {
      userName: userName,
      password: password,
    },
    headers: {
      "Content-type": "application/json",
    },
  });
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ userName, password }: User, { rejectWithValue }) => {
    const response = await postData({ userName, password });
    if (response.status !== 200) {
      return rejectWithValue("Error");
    }
    return response.data;
  }
);
