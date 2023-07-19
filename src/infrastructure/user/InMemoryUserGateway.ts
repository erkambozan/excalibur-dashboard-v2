import { UserGatewayPort } from "../../core/user/port/UserGatewayPort";
import { UserProps } from "../../core/user/entity/User";

export class InMemoryUserGateway implements UserGatewayPort {
  getAll(): Promise<UserProps[]> {
    return Promise.resolve([
      { email: "test", userName: "test" },
    ] as UserProps[]);
  }
}
