import { PermissionRole } from 'src/dto/account-management-list.dto';

export enum Role {
  Admin = 'admin',
  User = 'user'
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
  role: PermissionRole;
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
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  isActive: true;
  role: IUserRole;
}
