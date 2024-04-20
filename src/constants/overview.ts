export enum ActionTypeOverview {
  Stop = 'stop',
  Start = 'start',
  Algorithms = 'algorithms',
  Set_Point = 'set point',
  Setting = 'setting',
  Update_Firmware = 'update firmware',
  Set_Ems_Algorithms = 'set ems algorithms',
  Remote = 'remote',
  Set_Soc = 'set soc',
  Disable = 'disable',
  Enable = 'enable',
  Update_Software = 'update software'
}
export enum MethodSetSOC{
  CHARGE ='CHARGE',
  DISCHARGE ='DISCHARGE'
}

export enum TabIndex {
  Tab1 = '1',
  Tab2 = '2',
  Tab3 = '3'
}

export enum StatusPlantOverview {
  Active = 'active',
  Inactive = 'inactive'
}

export enum Dictionary {
  StringSetting = 'stringSetting',
  NumericSetting = 'numericSetting',
  BoolSetting = 'boolSetting',
  OptionSetting = 'optionSetting',
  IpSetting = 'ipSetting',
  DateTimeSetting = 'dateTimeSetting',
  DHCP = 'DHCP',
  IP = 'IP',
  Mask = 'Mask',
  Gateway = 'Gateway',
  DNS1 = 'DNS 1',
  DNS2 = 'DNS 2',
  LogLevel = 'log level'
}

export enum SettingsType {
  Status = 'status',
  SetPoint = 'set-points',
  SocLimit = 'soc-limits'
}