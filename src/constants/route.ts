export enum PAGE_ROUTE {
  LOGIN = '/login',
  NOT_FOUND = '/404',
  FORGOT_PASSWORD = '/forgot-password',
  CHANGE_PASSWORD = '/change-password',
  DASHBOARD = '/',
  DASHBOARD_ALARM = '/alarm',
  // Tenant
  DASHBOARD_TENANT = '/tenant',
  DASHBOARD_TENANT_CREATE = '/tenant/create-tenant',
  DASHBOARD_TENANT_UPDATE = '/tenant/update-tenant/:id',
  DASHBOARD_TENANT_DETAIL = '/tenant/:id',

  //Plant
  DASHBOARD_PLANT = '/plant',
  DASHBOARD_PLANT_DETAIL = '/plant/:id',
  DASHBOARD_PLANT_UPDATE = '/plant/update-plant/:id',
  DASHBOARD_PLANT_CREATE = '/plant/create-plant',

  //Overview
  DASHBOARD_OVERVIEW_EMS = '/overview/ems/:id',
  DASHBOARD_OVERVIEW_TENANT = '/overview/tenant/:id',
  DASHBOARD_OVERVIEW_PLANT = '/overview/plant/:id',
  DASHBOARD_OVERVIEW_CELL_DRIVER = '/overview/driver/:id',
  DASHBOARD_OVERVIEW_CELL = '/overview/cell/:id',

  //Ems
  DASHBOARD_EMS = '/ems',
  DASHBOARD_EMS_DETAIL = '/ems/:id',
  DASHBOARD_SYSTEM = '/system',
  ACCOUNT_MANAGEMENT = '/account',
  NEW_ACCOUNT = '/account/new',
  UPDATE_ACCOUNT = '/account/update/:id',

  DASHBOARD_CREATE_EMS = '/ems/create-ems',
  DASHBOARD_UPDATE_EMS = '/ems/update-ems/:id',
  PROFILE = '/profile',
  PROFILE_CHANGE_PASSWORD = '/profile/change-password',
  LOGOUT = '/logout',
  PLANT_FORM = '/plant/request-form',
  USER_PERMISSION = '/user-permission',
  TENANT_DETAIL = '/tenant/detail',
  COMMAND_LOGS = '/command-logs',
  USER_ACTIVITY_LOGS = '/user-activity-logs',
  ACCESS_DENIED = '/access-denied'
}

