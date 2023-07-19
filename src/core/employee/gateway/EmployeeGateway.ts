import { routesV1 } from "../../../app/apiRoutes";
import axiosInstance from "../../../app/axios";

export const getAll = async () => {
  const response = await axiosInstance.get(
    process.env.REACT_APP_BASE_BACKEND +
      routesV1.version +
      routesV1.employee.list
  );
  return response;
};
