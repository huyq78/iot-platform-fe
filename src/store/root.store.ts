import httpClient, { HttpService } from 'src/services/http.service';
import ConfigurationStore, { IConfiguration } from './configuration.store';
import { IUserStore, UserStore } from './user.store';
import { AccountManagementListStore, IAccountListStore } from './account-management/account-management-list.store';

export interface IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
  listAccountManagementListStore: IAccountListStore;
}
export type StoreChildKeyType = keyof IRootStore;

export class RootStore implements IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
  listAccountManagementListStore: IAccountListStore;
  constructor() {
    this.httpClient = httpClient;
    this.configuration = new ConfigurationStore();
    this.userStore = new UserStore();
    this.listAccountManagementListStore = new AccountManagementListStore(
      this.httpClient
    );
  }
}

const rootStore = new RootStore();
export default rootStore;
