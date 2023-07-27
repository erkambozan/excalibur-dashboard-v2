import { AggregateID, EntityBase } from "../../../app/ddd/entity.base";
import { AggregateRoot } from "../../../app/ddd/aggregate-root.base";

export interface HierarchyProps {
  id: number;
  parentId: number;
  path: string;
  name: string;
  workType: string;
  userId: string;
}

export interface TreeNode {
  id: number;
  parentId: number;
  name: string;
  type: string;
  path: string;
  children?: TreeNode[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateHierarchyProps {
  baseProps: EntityBase;
  id: number;
  parentId: number;
  path: string;
  name: string;
  workType: string;
  userId: string;
}

export class HierarchyEntity extends AggregateRoot<HierarchyProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateHierarchyProps): HierarchyEntity {
    const props: HierarchyProps = { ...create };

    return new HierarchyEntity({ props });
  }
}
