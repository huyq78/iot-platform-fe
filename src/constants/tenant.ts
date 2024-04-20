import { Plant } from './plant'
import { UserManageModel } from './user'

export enum OperatingStatus {
  PENDING = 'Pending set up',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}

export enum AssetStatus {
  ALLOCATED = 'Allocated',
  UNALLOCATED = 'Unallocated'
}
export interface TenantResponse{
    _id: string,
    createdOn: Date,
    updatedOn: Date,
    name: string,
    information: string,
    operating_status: OperatingStatus,
    asset_status: AssetStatus,
    is_deleted: boolean,
    plants: Array<Plant>,
    user_manages: Array<UserManageModel>
}