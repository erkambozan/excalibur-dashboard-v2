import { UserGatewayPort } from "../../core/user/port/userGatewayPort";
import { UserProps } from "../../core/user/entity/user";

export class InMemoryUserGateway implements UserGatewayPort {
  getAll(): Promise<UserProps[]> {
    return Promise.resolve([
      { email: "test", userName: "test" },
    ] as UserProps[]);
  }
}
