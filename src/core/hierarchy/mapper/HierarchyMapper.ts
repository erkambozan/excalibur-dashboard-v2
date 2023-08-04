import { HierarchyEntity, HierarchyProps, TreeNode } from "../entity/Hierarchy";

export class HierarchyMapper {
  static toViewModel(props: any): HierarchyProps {
    return {
      id: props.id,
      parentId: props.parentId,
      path: props.path,
      name: props.name,
      workType: props.workType,
      userId: props.userId,
    };
  }

  static toViewModelList(props: any[]): HierarchyProps[] {
    return props.map((item) => {
      return {
        id: item.id,
        parentId: item.parentId,
        path: item.path,
        name: item.name,
        workType: item.workType,
        userId: item.userId,
      };
    });
  }

  static toTreeNode(props: HierarchyProps[]): TreeNode[] {
    return props.map((item) => {
      return {
        id: item.id,
        parentId: item.parentId,
        name: item.name,
        type: item.workType,
        path: item.path,
        createdAt: "",
        updatedAt: "",
      };
    });
  }

  static toEntity(props: any): HierarchyEntity {
    return HierarchyEntity.create(props);
  }
}
