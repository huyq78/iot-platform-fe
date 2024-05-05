import httpClient, { HttpService } from 'src/services/http.service';
import ConfigurationStore, { IConfiguration } from './configuration.store';
import { IUserStore, UserStore } from './user.store';
import {
  AccountManagementListStore,
  IAccountListStore
} from './account-management/account-management-list.store';
import { IParameterStore, ParameterStore } from './parameter/parameter.store';
import {
  DeviceModelStore,
  IDeviceModelStore
} from './device-model/device-model.store';

export interface IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
  listAccountManagementListStore: IAccountListStore;
  parameterStore: IParameterStore;
  deviceModelStore: IDeviceModelStore;
}
export type StoreChildKeyType = keyof IRootStore;

export class RootStore implements IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
  listAccountManagementListStore: IAccountListStore;
  parameterStore: IParameterStore;
  deviceModelStore: IDeviceModelStore;
  constructor() {
    this.httpClient = httpClient;
    this.configuration = new ConfigurationStore();
    this.userStore = new UserStore();
    this.listAccountManagementListStore = new AccountManagementListStore(
      this.httpClient
    );
    this.parameterStore = new ParameterStore(this.httpClient);
    this.deviceModelStore = new DeviceModelStore(this.httpClient);
  }
}

const rootStore = new RootStore();
export default rootStore;
