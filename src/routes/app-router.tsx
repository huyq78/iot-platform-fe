import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BareLayout from 'src/layouts/bare/bare.layout';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from 'src/layouts/main/main.layout';
import { uniqueKey } from 'src/helpers/string.utils';
import { PAGE_ROUTE } from 'src/constants/route';

const NotFoundPage = lazy(() => import('src/pages/404/404'));

type RouteType = {
  index?: boolean;
  path?: string;
  element: React.LazyExoticComponent<React.FC>;
  children?: RouteType[];
};

const publicRoutes: RouteType[] = [
  {
    path: PAGE_ROUTE.LOGIN,
    element: lazy(() => import('src/pages/base.page')),
    children: [
      {
        index: true,
        element: lazy(() => import('src/pages/login/login'))
      }
    ]
  },
  {
    path: PAGE_ROUTE.FORGOT_PASSWORD,
    element: lazy(
      () =>
        import(
          'src/pages/login/components/forgot-password/forgot-password.page'
        )
    )
  },
  {
    path: PAGE_ROUTE.CHANGE_PASSWORD,
    element: lazy(
      () =>
        import(
          'src/pages/login/components/change-password/change-password.page'
        )
    )
  }
];

const privateRoutes: RouteType[] = [];

const renderRoute = (routes: RouteType[]) =>
  routes.map((r) => {
    const routeOptions: any = r.index ? { index: true } : { path: r.path };
    const Element = r.element;
    return (
      <Route
        key={uniqueKey(10)}
        path={routeOptions.path}
        element={
          <Suspense>
            <Element />
          </Suspense>
        }
        {...routeOptions}>
        {r.children?.map(({ element: ChildElement, ...rest }) => {
          return rest.index ? (
            <Route
              key={uniqueKey(10)}
              index
              element={
                <Suspense>
                  <ChildElement />
                </Suspense>
              }
            />
          ) : (
            <Route
              key={uniqueKey(10)}
              element={
                <Suspense>
                  <ChildElement />
                </Suspense>
              }>
              {rest.children && renderRoute(rest.children)}
            </Route>
          );
        })}
      </Route>
    );
  });

const AppRouters: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BareLayout />}>{renderRoute(publicRoutes)}</Route>
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
          {renderRoute(privateRoutes)}
        </Route>
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
