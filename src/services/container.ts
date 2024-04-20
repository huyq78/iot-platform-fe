import {
  AuthenticationService,
  IAuthenticationService
} from './authentication.service';
import httpService, { IHttpService } from './http.service';
import { IClientService, ClientService } from './websocket/client.service';

export interface IServiceContainer {
  httpService: IHttpService;
  authenticationService: IAuthenticationService;
  socketService: IClientService;
}
export type IoCServiceKeyType = keyof IServiceContainer;
export class ServiceContainer implements IServiceContainer {
  httpService: IHttpService;
  authenticationService: IAuthenticationService;
  socketService: IClientService;
  constructor() {
    this.httpService = httpService;
    this.authenticationService = new AuthenticationService(this.httpService);
    this.socketService = new ClientService(this.httpService);
  }
}

const ioc = new ServiceContainer();
export default ioc;
