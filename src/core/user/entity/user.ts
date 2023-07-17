import { AggregateID, EntityBase } from "../../../app/ddd/entity.base";
import { AggregateRoot } from "../../../app/ddd/aggregate-root.base";

export interface UserProps {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export interface CreateUserProps {
  baseProps: EntityBase;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
}

export class UserEntity extends AggregateRoot<UserProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateUserProps): UserEntity {
    const props: UserProps = { ...create };

    return new UserEntity({ props });
  }
}
