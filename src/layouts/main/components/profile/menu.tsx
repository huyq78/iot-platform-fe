import { Button, Col, Menu, Modal, Row, Typography } from 'antd';
import React, { FC, useState } from 'react';
import styles from './menu.module.less';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { i18nKey } from 'src/locales/i18n';
import { PAGE_ROUTE } from 'src/constants/route';
import { MenuItem } from 'src/hooks/use-menu-item';

const ProfileMenu: FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open)
  }

  const menu: MenuItem[] = [
    {
      label: t(i18nKey.menu.logout),
      key: PAGE_ROUTE.LOGOUT,
      onClick: () =>
      handleOpen()
    } as MenuItem,
  ]
  const getSelectedKeys = (pathname: string) => {
    const selectedKeys: [] = [];
    selectedKeys.push(pathname as never);
    return selectedKeys;
  };
  
  return (
    <div className={styles.wrapper}>
      <Menu 
        className={styles.wrapper_menu}
        items={menu as any}
        selectedKeys={getSelectedKeys(location.pathname)}
      />

      <Modal
        centered
        wrapClassName={styles.wrapper_bodyModal}
        open={open}
        closable={false}
        onCancel={onCancel}
        width={343}
        footer={
          <div className={styles.wrapper_footer}>
            <Row gutter={12}>
              <Col span={12}>
                <Button
                  onClick={onCancel}
                  className={styles.wrapper_footer_cancel}
                  type="default">
                  {t(i18nKey.button.cancel)}
                </Button>
              </Col>
              <Col span={12}>
                <Button className={styles.wrapper_footer_submit}>
                  {t(i18nKey.button.ok)}
                </Button>
              </Col>
            </Row>
          </div>
        }>
        <div className={styles.header}>
          <Typography className={styles.wrapper_header_title}>{t(i18nKey.menu.logout)}</Typography>
          <span className={styles.wrapper_header_desc}>
            {t(i18nKey.confirmationPopup.logout)}
          </span>
        </div>
      </Modal>
    </div>

  );
};
export default ProfileMenu;
