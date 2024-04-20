export enum Role {
  SUPER_ADMIN = 'super-admin',
  TENANT_ADMIN = 'tenant-admin',
  ANALYST = 'analyst',
  CUSTOMER_SERVICE = 'customer-service',
  Viewer = 'viewer'
}

export interface IUserRole {
  _id: string;
  name: string;
  role: Role;
}

export interface IUserInfo {
  id: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  phone_code: string;
  // role: PermissionRole;
  avatar?: string;
}

export interface IUserResponseGetByEmail {
  _id: string;
  email: string;
  avatar?: string;
  first_name: string;
  last_name: string;
}

export interface IAccountInfo {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_code: string;
  phone_number: string;
  is_active: true;
  role: IUserRole;
  tenants: string[];
}
