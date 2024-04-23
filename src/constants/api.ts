export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export enum HTTP_STATUS_CODE {
  SUCCESS = '200',
  BAD_REQUEST = '400',
  NOT_FOUND = '404',
  AUTHORIZATION = '401',
  FORBIDDEN = '403',
  UNKNOWN = '520'
}

export enum HTTP_STATUS_RESPONSE_KEY {
  SUCCESS = '000200',
  BAD_REQUEST = '000400',
  NOT_FOUND = '000404',
  AUTHORIZATION = '000401',
  FORBIDDEN = '000403',
  UNKNOWN = '000500'
}

export enum ENDPOINT {
  ROOT = '/api',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REFRESH_TOKEN = '/auth/refresh-token',
  CREATE_PASSWORD = '/auth/create-new-password',
  FORGOT_PASSWORD = '/auth/forgot-password',
  CHANGE_PASSWORD = '/auth/create-new-password',
}
