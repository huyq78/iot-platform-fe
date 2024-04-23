import { i18nKey } from 'src/locales/i18n';
import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';
import { PAGE_ROUTE } from 'src/constants/route';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const useMenuProfile = () => {
  const [t] = useTranslation();
  const navigator = useNavigate();
  const menuProfile: MenuItem[] = [
    {
      label: `${t(i18nKey.menu.logout)}`,
      key: PAGE_ROUTE.LOGOUT,
      onClick: () => navigator(PAGE_ROUTE.LOGOUT)
    }
  ];

  return menuProfile;
};

export default useMenuProfile;
