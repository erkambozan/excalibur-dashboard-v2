import { HierarchyEntity } from "../entity/Hierarchy";

export interface HierarchyGatewayPort {
  getAll(): Promise<HierarchyEntity[]>;
}
