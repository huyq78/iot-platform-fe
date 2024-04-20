import validation from './validation';
import loginPage from './loginPage';
import accountEntity from './accountEntity';
// import tenantEntity from './tenantEntity';
// import emsEntity from './emsEntity';
// import plantEntity from './plantEntity';
// import permissionEntity from './permissionEntity';
// import userActivityLogs from './userActivityLogs';
// import notifications from './notifications';
// import commandLogs from './commandLogs';
// import dashboard from './dashboard';
// import alarmCenter from './alarmCenter';

const en = {
  loginPage,
  accountEntity,
  // tenantEntity,
  // emsEntity,
  // plantEntity,
  // alarmCenter,
  validation,
  confirm,
  // permissionEntity,
  // userActivityLogs,
  // commandLogs,
  // notifications,
  // dashboard,
  httpResponseMessage: {
    _400_BadRequest:
      'The server cannot process the request due to a client error.',
    _401_Unauthorized_Access_Denided:
      'Access denied. You do not have the required permissions to access this feature or data. Please contact your administrator for assistance.',
    _401_Unauthorized_Session_Expired:
      'Your session has expired. Please log in again to continue accessing the application.',
    _403_Forbidden:
      'The server understands the request but refuses to authorize it.',
    _404_Not_Found: '404 Page Not Found',
    _500_Internal_Server_Error:
      'The server encountered an unexpected condition that prevented it from fulfilling the request.',
    _502_Bad_Gateway:
      'The server acting as a gateway received an invalid response from the upstream server.',
    _503_Service_Unavailable:
      'The server is currently unavailable due to overload or maintenance.',
    _504_GatewayTimeout:
      'The server acting as a gateway did not receive a timely response from the upstream server.',
    _500_Dashboard_No_Tenant_Data:
      "You're currently not part of any Tenants...",
    _500_Dashboard_No_Plant_Data: "You're currently not part of any Plants"
  },

  status: {
    'pending-setup': 'Pending Setup',
    active: 'Active',
    inactive: 'Inactive',
    idle: 'Idle',
    'in-progress': 'In Progress',
    succeeded: 'Succeeded',
    failed: 'Failed',
    queued: 'Queued',
    'open': 'Open',
    'closed': 'Closed',
    'connected': 'Connected',
    'disconnected': 'Disconnected',
  },

  confirmationPopup: {
    cancel: 'Are you sure you want to cancel this action?',
    create: 'Are you sure you want to create this record?',
    update: 'Are you sure you want to update this record?',
    delete: 'Are you sure you want to delete this record?',
    remove: 'Are you sure you want to remove this record?',
    removeCustom: 'Are you sure you want to remove: ',
    logout: 'Are you sure you want to logout?',
    cancelBtn: 'Cancel',
    okBtn: 'OK'
  },

  menu: {
    dashboard: 'Dashboard',
    alarmCenter: 'Alarm Center',
    tenantCenter: 'Tenant Center',
    plantCenter: 'Plant Center',
    emsCenter: 'EMS Center',
    systemManagement: 'System Management',
    userActivityLogs: 'User Activity Logs',
    commandLogs: 'Command Logs',
    accountManagement: 'Account Management',
    rolesAndPermissions: 'Roles & Permissions',
    notifications: 'Notifications',
    myProfile: 'My Profile',
    changePassword: 'Change Password',
    logout: 'Logout'
  },

  label: {
    confirmCorrelationInfo: 'Confirm Correlation Info',
    role: 'Role',
    status: 'Status',
    tenantId: 'Tenant ID',
    level: 'Level',
    tenant: 'Tenant',
    tenants: 'Tenant(s)',
    tenantName: 'Tenant Name',
    tenantOwner: 'Tenant Owner',
    plant: 'Plant',
    plants: 'Plant(s)',
    plantList: 'Plant List',
    plantName: 'Plant Name',
    plantOwner: 'Plant Owner',
    location: 'Location',
    locationOwner: 'Location Owner',
    locationList: 'Location List',
    email: 'Email',
    plantLocation: 'Plant/Location',
    plantLocations: 'Plant/Location(s)',
    tenantPlantLocation: 'Tenant/Plant/Location',
    EMS: 'EMS',
    emsName: 'EMS Name',
    cellDriver: 'Cell Driver',
    cell: 'Cell',
    associatedAssets: 'Associated Assets',
    associationRelationship: 'Association Relationship',
    createdDate: 'Created Date',
    timestamp: 'Timestamp',
    operations: 'Operations',
    battery: 'Battery',
    goToDashboard: 'Go to Dashboard',
    name: 'Name',
    owner: 'Owner',
    tel: 'TEL',
    hubId: 'Hub ID'
  },

  button: {
    cancel: 'Cancel',
    next: 'Next',
    back: 'Back',
    create: 'Create',
    update: 'Update',
    ok: 'OK',
    reset: 'Reset',
    totalEntries: 'Total {{totalEntries}} entries',
    delete: 'Delete',
    add: 'Add',
    remove: 'Remove',
    disable: 'Disable',
    enable: 'Enable',
    done: 'Done',
    confirm: 'Confirm',
    seeMore: 'See More'
  },

  defaultPlaceholder: {
    search: 'Search by Tenant, Plant, Location, Full Name, Email',
    searchAccount: 'Search by Full Name, Email'
  },

  messageIndicator: {
    deleteTenantUnavailable:
      "Deletion is only available for Tenants with an 'Idle' status.",
    deletePlantUnavailable:
      "Deletion is only available for Plants with an 'Idle' status.",
    removePlantUnavailable:
      "Removal is only available for Plants with an 'Idle' status.",
    removePlantOwnerUnavailable:
      'Cannot remove the last Plant owner as there are still location owners associated with this Plant. Please assign another ownership of the locations or remove all location owners before attempting to remove the last Plant owner.',
    deleteLocationUnavailable:
      'Deletion is only available for Locations that have no associated EMS.',
    deleteEMSUnavailable:
      "Deletion is only available for EMS with an 'Inactive' or 'Idle' status.",
    removeEMSUnavailable:
      "Removal is only available for EMS with an 'Inactive' status.",
    allocateAnotherEMSWarning:
      'This location already has an EMS. If you continue with the selection, the current EMS will be replaced by the new EMS.',
    updateAccountUnavailable:
      'Updates to this user account cannot be made until it has been activated. Please activate the account first before making any changes.',
    updatePlantOwnerUnavailable:
      'Updates to the owner of this Plant cannot be made until it is allocated to a Tenant.',
    resetPasswordUnavailable:
      'Password reset request cannot be made to this email until it has been activated.',
    exroAdminPermissionDenied:
      'You do not have permission to view/update Exro service admin (Super Admin).'
  }
};

export default en;
