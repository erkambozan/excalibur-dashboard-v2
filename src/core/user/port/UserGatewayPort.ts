import { UserProps } from "../entity/User";

export interface UserGatewayPort {
  getAll(): Promise<UserProps[]>;
}
