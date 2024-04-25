import React from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation, matchRoutes } from 'react-router-dom';
import { PAGE_ROUTE } from 'src/constants/route';
import { Permission } from 'src/constants/user';
import { IAuthenticationService } from 'src/services/authentication.service';
import useService from 'src/hooks/use-service';

interface IProtected {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<IProtected> = ({ children }) => {
  const location = useLocation();
  const authService: IAuthenticationService = useService(
    'authenticationService'
  );

  const ROUTE_PERMISSION_ACCESS_MAP: Record<any, Array<Permission>> = {
    [PAGE_ROUTE.DASHBOARD]: [] as Array<Permission>,
    [PAGE_ROUTE.ACCOUNT_MANAGEMENT]: [],
    [PAGE_ROUTE.NEW_ACCOUNT]: [
    ],
    [PAGE_ROUTE.UPDATE_ACCOUNT]: [],
  };
  
  if (!authService.isAuthenticated) {
    return <Navigate to={PAGE_ROUTE.LOGIN} replace />;
  }
  //check permission

  const listMyPermission =
    authService.permissionRole?.groups?.map((group) => group.permission.key) ||
    [];

  const listRoute = Object.values(PAGE_ROUTE as Object).map((value) => ({
    path: value
  }));
  const [{ route }] = matchRoutes(listRoute, location.pathname) || [];

  const listPermissionAccessRoute =
    ROUTE_PERMISSION_ACCESS_MAP[route.path as PAGE_ROUTE];
  if (
    listPermissionAccessRoute &&
    listPermissionAccessRoute.length &&
    listPermissionAccessRoute.some((r) => !listMyPermission.includes(r))
  ) {
    return <Navigate to={PAGE_ROUTE.ACCESS_DENIED} replace />;
  }
  return children;
};

export default observer(ProtectedRoute);
