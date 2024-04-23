import { Role } from 'src/interfaces/user';
import { Permission } from 'src/constants/user';

export interface PermissionRole {
  _id: string;
  name: string;
  role: Role;
  groups: Array<{
    group_permission_id: string;
    permission: {
      _id: string;
      name: string;
      key: Permission;
    };
  }>;
}

