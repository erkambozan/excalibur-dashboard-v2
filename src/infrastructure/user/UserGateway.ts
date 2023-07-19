import { UserGatewayPort } from "../../core/user/port/UserGatewayPort";
import axios from "axios";
import { routesV1 } from "../../app/apiRoutes";

export class UserGateway implements UserGatewayPort {
  async getAll(): Promise<any> {
    return await axios.get(
      process.env.REACT_APP_BASE_BACKEND + routesV1.user.list
    );
  }
}
