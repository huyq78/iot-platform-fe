export enum UserRole {
  ADMIN = 'Admin',
  USER = 'User'
}

export enum TargetModel {
  TENANT = 'Tenant',
  LOCATION = 'Location'
}
export enum ManagerType {
  TENANT = 'Tenant Owner',
  LOCATION = 'Location Owner'
}

export interface UserManageModel {
  user_id: string;
  type: ManagerType;
  target: string;
  target_model: TargetModel;
}

export interface IOptionUserAssign {
  label: string;
  avatar?: string;
  first_name?: string;
  last_name?: string;
  key: string;
}

export interface IUserBasic {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  isDisable?: string;
  textDisable?: string;
}
export type Owner = IUserBasic


export enum Permission {
  startStopEms = 'start-and-stop-ems',
  startStopHub = 'start-and-stop-hub',
  setPointEms = 'enter-manual-setpoints-ems',
  setPointHub = 'enter-manual-setpoints-hub',
  
  openRemote = 'open-a-remote-desktop-or-tunnel-into-the-ems',
  updateSoftwareEms= 'transfer-binary-files-and-update-version-of-ems-services',
  updateFirmwareCellDevice = 'transfer-binary-files-and-reprogram-devices-in-the-system',
  
  onOffTabService = 'on-off-tab-service',
  
  setUserSOCHub = 'set-user-soc-charge-and-discharge-limit-hub',
  setUserSOCEms = 'set-user-soc-charge-and-discharge-limit-ems',

  viewTenantCenterPage = 'view-tenant-center-page',

  viewPlantCenterPage = 'view-plan-center-page',
  createPlant = 'create-plant',
  updatePlant = 'update-plant',


  viewAlarmCenterPage = 'view-alarm-center-page',
  updateAlarmStatus = 'update-alarm-status',

  viewUserActivityLogsPage = 'view-user-activity-logs-page',

  viewAccountManagementPage = 'view-account-management-page',

  cudAccount = 'create-or-update-or-delete-account',

  viewAndUpdateUsersAndPermissionsPage = 'view-and-update-users-and-permissions-page',

  viewCommandLogPage = 'view-command-log-page',

  viewDictionaryPage = 'view-dictionary-page',
  enableDisableDeviceService = 'enable-and-disable-the-device-service',
  settingDictionaryDeviceService = 'setting-dictionary-the-device-service',
}

export const messageNotFoundUser = 'User not found';
