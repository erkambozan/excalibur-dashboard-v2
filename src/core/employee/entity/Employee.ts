import { AggregateID, EntityBase } from "../../../app/ddd/entity.base";
import { AggregateRoot } from "../../../app/ddd/aggregate-root.base";

export interface EmployeeProps {
  hierarchyId: number;
  hierarchyPath: string;
  workType: string;
  userId: string;
}

export interface CreateEmployeeProps {
  baseProps: EntityBase;
  hierarchyId: number;
  hierarchyPath: string;
  workType: string;
  userId: string;
}

export const employeeColumns = [
  {
    field: "workType",
    headerName: "Çalışma Tipi",
    width: 200,
  },
  {
    field: "hierarchyId",
    headerName: "Hiyerarşi ID",
    width: 100,
  },
  {
    field: "userId",
    headerName: "Kullanıcı ID",
    width: 200,
  },
];

export class EmployeeEntity extends AggregateRoot<EmployeeProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateEmployeeProps): EmployeeEntity {
    const props: EmployeeProps = { ...create };

    return new EmployeeEntity({ props });
  }
}
