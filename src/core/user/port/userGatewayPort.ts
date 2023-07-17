import { UserProps } from "../entity/user";

export interface UserGatewayPort {
  getAll(): Promise<UserProps[]>;
}
