export type AggregateID = any;

export interface CreateEntityProps<T> {
  id?: AggregateID;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  isActive?: boolean;
  isDeleted?: boolean;
}

export interface EntityBase {
  id: AggregateID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
}

export abstract class Entity<EntityProps> {
  protected abstract _id: AggregateID;
  protected readonly _createdAt: Date;
  protected readonly _updatedAt: Date;
  protected readonly _deletedAt: Date;
  protected readonly _isActive: boolean;
  protected readonly _isDeleted: boolean;
  protected readonly _createdBy: string;
  protected readonly _updatedBy: string;
  protected readonly _deletedBy: string;
  protected readonly props: EntityProps;
  constructor({
    id,
    createdAt,
    updatedAt,
    deletedAt,
    isActive,
    isDeleted,
    createdBy,
    updatedBy,
    deletedBy,
    props,
  }: CreateEntityProps<EntityProps>) {
    this.setId(id);
    const now = new Date();
    this._createdAt = createdAt || now;
    this._updatedAt = updatedAt || now;
    this._deletedAt = deletedAt || now;
    this._isActive = isActive || true;
    this._isDeleted = isDeleted || false;
    this._createdBy = createdBy || "";
    this._updatedBy = updatedBy || "";
    this._deletedBy = deletedBy || "";
    this.props = props;
  }

  get id(): AggregateID {
    return this._id;
  }

  private setId(id: AggregateID): void {
    this._id = id;
  }

  public getProps(): EntityProps & EntityBase {
    const propsCopy = {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      deletedAt: this._deletedAt,
      isActive: this._isActive,
      isDeleted: this._isDeleted,
      createdBy: this._createdBy,
      updatedBy: this._updatedBy,
      deletedBy: this._deletedBy,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}
