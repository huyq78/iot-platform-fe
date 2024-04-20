import httpClient, { HttpService } from 'src/services/http.service';
import ConfigurationStore, { IConfiguration } from './configuration.store';
import { IUserStore, UserStore } from './user.store';

export interface IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
}
export type StoreChildKeyType = keyof IRootStore;

export class RootStore implements IRootStore {
  configuration: IConfiguration;
  userStore: IUserStore;
  httpClient: HttpService;
  constructor() {
    this.httpClient = httpClient;
    this.configuration = new ConfigurationStore();
    this.userStore = new UserStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
