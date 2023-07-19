import { UserGatewayPort } from "../core/user/port/UserGatewayPort";
import { EmployeeGatewayPort } from "../core/employee/port/EmployeeGatewayPort";

export interface Dependencies {
  userGatewayPort: UserGatewayPort;
  employeeGatewayPort: EmployeeGatewayPort;
}
