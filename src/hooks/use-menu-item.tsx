import React from 'react';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { i18nKey } from 'src/locales/i18n';
import { PAGE_ROUTE } from 'src/constants/route';
import { ReactComponent as DashboardIcon } from 'src/assets/icons/Dashboard-default.svg';
import { ReactComponent as DashboardIconActive } from 'src/assets/icons/Dashboard-active.svg';
import { useMatch, useLocation } from 'react-router-dom';

export type MenuItem = Required<MenuProps>['items'][number];

const useMenuItem = () => {
  const location = useLocation();
  const [t] = useTranslation();

  const menu: MenuItem[] = [
    {
      label: t(i18nKey.menu.dashboard),
      key: PAGE_ROUTE.DASHBOARD,
      icon:
        useMatch(PAGE_ROUTE.DASHBOARD) ||
        location.pathname.includes('overview') ? (
          <DashboardIconActive />
        ) : (
          <DashboardIcon />
        ),
    } as MenuItem,
  ];

  return menu;
};

export default useMenuItem;
