import {
  CreateEmployeeProps,
  EmployeeEntity,
  EmployeeProps,
} from "../entity/Employee";

export class EmployeeMapper {
  static toViewModel(entities: any[]): EmployeeProps[] {
    return entities.map((entity: any) => {
      const props: EmployeeProps = { ...entity };

      return props;
    });
  }

  static toEntity(props: CreateEmployeeProps): EmployeeEntity {
    return EmployeeEntity.create(props);
  }
}
