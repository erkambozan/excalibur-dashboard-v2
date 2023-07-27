import { UserGatewayPort } from "../core/user/port/UserGatewayPort";
import { EmployeeGatewayPort } from "../core/employee/port/EmployeeGatewayPort";
import { HierarchyGatewayPort } from "../core/hierarchy/port/HierarchyGatewayPort";

export interface Dependencies {
  userGatewayPort: UserGatewayPort;
  employeeGatewayPort: EmployeeGatewayPort;
  hierarchyGatewayPort: HierarchyGatewayPort;
}
