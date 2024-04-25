import { Permission } from 'src/constants/user'

export const listPermissionTenant = [Permission.viewTenantCenterPage];
export const listPermissionPlant = [Permission.viewPlantCenterPage,Permission.createPlant,Permission.updatePlant];
export  const listPermissionServiceTab = [Permission.onOffTabService,Permission.settingDictionaryDeviceService,Permission.viewDictionaryPage,Permission.enableDisableDeviceService, Permission.updateSoftwareEms];
export  const listPermissionControlPanelTab = [Permission.setPointEms,Permission.setUserSOCEms,Permission.openRemote];
export const listPermissionSettingTab = [Permission.setPointHub,Permission.setUserSOCHub,Permission.updateFirmwareCellDevice]
export const listPermissionAccount = [Permission.viewAccountManagementPage,Permission.cudAccount];
export const listPermissionAlarm = [Permission.viewAlarmCenterPage,Permission.updateAlarmStatus]