import { UserProps } from "../entity/User";

export class UserMapper {
  static toViewModel(props: any): any {
    return {
      email: props.email,
      userName: props.userName,
      firstName: props.firstName,
      lastName: props.lastName,
      phone: props.phone,
      role: props.role,
    };
  }

  static toViewModelList(props: any[]): UserProps[] {
    return props.map((item) => {
      return {
        id: item.id,
        email: item.email,
        userName: item.userName,
        firstName: item.firstName,
        lastName: item.lastName,
        phone: item.phone,
        role: item.role,
      };
    });
  }
}
