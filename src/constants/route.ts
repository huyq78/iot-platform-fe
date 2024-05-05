export enum PAGE_ROUTE {
  LOGIN = '/login',
  NOT_FOUND = '/404',
  FORGOT_PASSWORD = '/forgot-password',
  DASHBOARD = '/',
  LOGOUT = '/logout',
  ACCESS_DENIED = '/access-denied',

  ACCOUNT_MANAGEMENT = '/account',
  NEW_ACCOUNT = '/account/new',
  UPDATE_ACCOUNT = '/account/update/:id',
  CHANGE_PASSWORD = '/change-password',

  MASTER_DATA = '/master-data',
  PARAMETER = '/parameter',
  NEW_PARAMETER = '/parameter/new',
  UPDATE_PARAMETER = '/parameter/update/:id',
  DEVICE_MODEL = '/device-model',
  NEW_DEVICE_MODEL = '/device-model/new',
  UPDATE_DEVICE_MODEL = '/device-model/update/:id',

  DASHBOARD_PLANT = '/plant',
}
