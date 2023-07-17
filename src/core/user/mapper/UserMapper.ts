import { UserEntity, UserProps } from "../entity/user";

export class UserMapper {
  static toViewModel(props: UserProps): any {
    return {
      email: props.email,
      userName: props.userName,
      firstName: props.firstName,
      lastName: props.lastName,
      phone: props.phone,
      role: props.role,
    };
  }

  static toEntity(props: any): UserEntity {
    return UserEntity.create(props);
  }
}
