import { EmployeeProps } from "../entity/Employee";

export interface EmployeeGatewayPort {
  getAll(): Promise<EmployeeProps[]>;
}
