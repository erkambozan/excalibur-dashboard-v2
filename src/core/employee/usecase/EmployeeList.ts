import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dependencies } from "../../../app/dependencies";
import { RootState } from "../../../index";
import { EmployeeMapper } from "../mapper/EmployeeMapper";
import { getAll } from "../gateway/EmployeeGateway";
import { EmployeeProps } from "../entity/Employee";

export const employeeList = createAsyncThunk<
  any,
  void,
  {
    state: RootState;
  }
>("employee/employeeList", async () => {
  const users = await getAll();
  return EmployeeMapper.toViewModel(users.data);
});
