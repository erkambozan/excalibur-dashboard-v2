import { routesV1 } from "../../../app/apiRoutes";
import axiosInstance from "../../../app/axios";

export const getAll = async () => {
    return await axiosInstance.get(
    process.env.REACT_APP_BASE_BACKEND +
      routesV1.version +
      routesV1.hierarchy.list
  );
};

export const create = async (data: any) => {
    return await axiosInstance.post(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.hierarchy.create,
        data
    );
};
