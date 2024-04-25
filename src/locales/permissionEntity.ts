import { Permission } from 'src/constants/user';
import { Role } from 'src/interfaces/user';

const permissionEntity = {
  title: 'Roles & Permissions',

  label: {
    permissionAndRole: 'Permission/Role',
    tooltip:
      'Access only resources which are within the scope visibility for that key',
    latestAndHistorical:
      'Access all the latest and historical data for display and analysis',
    startSystem: 'Start the system',
    stopSystem: 'Stop the system',
    manualSetpoints: 'Enter manual setpoints (Watts plus/minus)',
    emsAlgorithms: 'Disable/Enable EMS algorithms',
    openRemoteEMS: 'Open a remote desktop/tunnel into the EMS',
    transferSettingsEMS: 'Transfer/write settings file(s) to EMS',
    transferFilesAndReprogram:
      'Transfer binary files and reprogram devices in the system',
    setEmsAlgorithms: 'Set of commands to enable/disable EMS algorithms',
    viewTenantPage: 'View Tenant Center Page',
    createUpdateDeleteTenant: 'Create/Update/Delete Tenant',
    viewPlantPage: 'View Plant Center Page',
    createUpdateDeletePlant: 'Create/Update/Delete Plant',
    viewEMSPage: 'View EMS Center Page',
    createUpdateDeleteEMS: 'Create/Update/Delete EMS',
    viewAlarmPage: 'View Alarm Center Page',
    updateAlarmStatus: 'Update Alarm Status',
    viewUserLogsPage: 'View User Activity Logs Page',
    viewAccountPage: 'View Account Management Page',
    createUpdateDeleteAccount: 'Create/Update/Delete Account',
    viewAndUpdatePermissions: 'View and Update Roles & Permissions” page',
    viewCommandLogs: 'View “Command Logs” page'
  },
  group: {
    controlPanelTab: 'Control Panel Tab',
    serviceTab: 'Service Tab',
    settingTab: 'Setting Tab',
    accountPermission: 'Account Permission',
    emsPermission: 'Ems Permission',
    plantPermission: 'Plant Permission',
    tenantPermission: 'Tenant Permission',
    alarmPermission:   'Alarm Permission'

  },

  role: {
    admin: 'Admin',
    viewer: 'Viewer'
  },
  roleKeyToText: {
    [Role.Admin]: 'Admin',
    [Role.User]: 'User',
  },

  permissionKeyToText: {
    [Permission.startStopEms] : 'Start/Stop Ems',
    [Permission.startStopHub] : 'Start/Stop Cell Driver',
    [Permission.setPointEms] : 'Set Points',
    [Permission.setPointHub] : 'Set Points',
    
    [Permission.openRemote] : 'Remote',
    [Permission.updateSoftwareEms]: 'Update Software',
    [Permission.updateFirmwareCellDevice] : 'Update Firmware',
    
    [Permission.onOffTabService] : 'View Services list',
    
    [Permission.setUserSOCHub] : 'Set SOC Limitation',
    [Permission.setUserSOCEms] : 'Set SOC Limitation',
  
    [Permission.viewTenantCenterPage] : 'View Tenant Center Page',
  
    [Permission.viewPlantCenterPage] : 'View Plant Center Page',
    [Permission.createPlant] : 'Create Plant',
    [Permission.updatePlant] : 'Update plant',
  
  
    [Permission.viewAlarmCenterPage] : 'View Alarm Center Page',
    [Permission.updateAlarmStatus] : 'Update Alarm Status',
  
    [Permission.viewUserActivityLogsPage] : 'View User Activity Logs Page',
  
    [Permission.viewAccountManagementPage] : 'View Account Management Page',
  
    [Permission.cudAccount] : 'Create/Update Account',
  
    [Permission.viewAndUpdateUsersAndPermissionsPage] : 'View and Update “Users & Permissions” page',
  
    [Permission.viewCommandLogPage] : 'View “Command Logs” page',
  
    [Permission.viewDictionaryPage] : 'View Device Service Settings',
    [Permission.enableDisableDeviceService] :'Enable/Disable the device service',
    [Permission.settingDictionaryDeviceService] : 'Update Device Service Settings',
   
  }
};

export default permissionEntity;
