export enum DeviceType {
  PV_Inverter = 'PV Inverter',
  Diesel_Generator = 'Diesel Generator',
  Wind_Turbine = 'Wind Turbine'
}

export enum Timeseries {
  Phase_SOH = '3-PhaseSOH',
  Total_kWh_Injected = 'Total-kWh-Injected',
  Total_kWh_Absorbed = 'Total-kWh-Absorbed',
  Total_3_Phase_AC_kW = 'Total-3-Phase-AC-kW',
  Phase_kWh_Available = '3-Phase-kWh-Available',
  Local_Loads_kW = 'Local-Loads-kW',
  Phase_SOC = '3-Phase-SOC',
  Solar_AC_kW = 'Solar-AC-kW',
  Solar_Total_kWh_Injected = 'Solar-Total-kWh-Injected',
  Building_Utility_meter = 'Building/Utility-meter',
  SOC_Charge_Limit = 'SOC-Charge-Limit',
  SOC_Discharge_Limit = 'SOC-Discharge-Limit',
  Active_Controll_Scheme = 'Active-Controll-Scheme',
  Cell_Driver_Capacity = 'Cell-Driver-Capacity'
}

export enum TextTimeseries {
  Phase_SOH = '3-Phase SOH',
  Total_kWh_Injected = 'Total kWh Injected',
  Total_kWh_Absorbed = 'Total kWh Absorbed',
  Total_3_Phase_AC_kW = 'Total 3-Phase AC kW',
  Phase_kWh_Available = '3-Phase kWh Available',
  Local_Loads_kW = 'Local Loads kW',
  Phase_SOC = '3-Phase SOC',
  Solar_AC_kW = 'Solar AC kW',
  Solar_Total_kWh_Injected = 'Solar Total kWh Injected',
  Building_Utility_meter = 'Building/Utility meter',
  SOC_Charge_Limit = 'SOC Charge Limit',
  SOC_Discharge_Limit = 'SOC Discharge limit',
  Active_Controll_Scheme = 'Active Control Scheme',
  Cell_Driver_Capacity = 'Cell Driver Capacity'
}

export enum BackgroupColor {
  Phase_SOH = 'rgba(222, 221, 247, 0.4)',
  Total_kWh_Injected = 'rgba(255, 234, 204, 0.4)',
  Total_kWh_Absorbed = 'rgba(255, 245, 204, 0.4)',
  Total_3_Phase_AC_kW = 'rgba(255, 216, 214, 0.4)',
  Phase_kWh_Available = 'rgba(214, 244, 222, 0.4)',
  Local_Loads_kW = 'rgba(204, 244, 242, 0.4)',
  Phase_SOC = 'rgba(204, 228, 255, 0.4)',
  Solar_AC_kW = 'rgba(239, 220, 248, 0.4)',
  Solar_Total_kWh_Injected = 'rgba(239, 220, 248, 0.4)',
  Building_Utility_meter = 'rgba(221, 233, 224, 0.4)',
  SOC_Charge_Limit = 'rgba(187, 158, 197, 0.4)',
  SOC_Discharge_Limit = '#EBF4FF',
  Active_Controll_Scheme = 'rgba(155, 227, 193, 0.4)',
  Cell_Driver_Capacity = 'rgba(255, 153, 204, 0.4)'
}

export enum Color {
  Phase_SOH = '#5856D6',
  Total_kWh_Injected = '#FF9500',
  Total_kWh_Absorbed = '#FFCC00',
  Total_3_Phase_AC_kW = '#FF3B30',
  Phase_kWh_Available = '#34C759',
  Local_Loads_kW = '#00C7BE',
  Phase_SOC = '#007AFF',
  Solar_AC_kW = '#AF52DE',
  Solar_Total_kWh_Injected = '#FF2D55',
  Building_Utility_meter = '#539165',
  SOC_Charge_Limit = '#540D6E',
  SOC_Discharge_Limit = '#007AFF',
  Active_Controll_Scheme = '#06BA63',
  Cell_Driver_Capacity = '#FF007F'
}

export enum BgAssociated {
  PV_Inverter = 'rgba(255, 216, 214, 0.4)',
  Diesel_Generator = 'rgba(212, 245, 217, 0.2)',
  Wind_Turbine = 'rgba(204, 228, 255, 0.2)'
}

export enum ColorAssociated {
  PV_Inverter = '#FF3B30',
  Diesel_Generator = '#28CD41',
  Wind_Turbine = '#007AFF'
}

export enum TypeFile {
  Root = 'root-ca',
  Device = 'device-certificatie',
  Private = 'private-key',
  Public = 'public-key',
  Supplementary = 'supplementary'
}
