import {
  Avatar,
  Button,
  Col,
  Modal,
  Popover,
  Row,
  Typography
} from 'antd';

import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import styles from './header.module.less';
import { i18nKey } from 'src/locales/i18n';
import { useTranslation } from 'react-i18next';
import { IUserStore } from 'src/store/user.store';
import useStore from 'src/hooks/use-store';

export interface IProp {
  toggleCollapsed?: () => void;
}

const AppHeader: FC = () => {
  const [open, setOpen] = useState(false);
  const [openPopupProfile, setOpenPopupProfile] = useState<boolean>(false);
  const onLogoutClick = () => {
    setOpen(true);
    setOpenPopupProfile(false);
  };
  const userStore: IUserStore = useStore('userStore');

  const { t } = useTranslation();
  const onCancel = () => {
    setOpen(false);
  };

  const HeaderMenu = () => {
    return (
      <div className={styles.menu_container}>
        <div className={styles.item_title}>
          {userStore.userInfo?.avatar ? (
            <Avatar size={40} src={userStore.userInfo?.avatar} />
          ) : (
            <Avatar
              style={{ backgroundColor: '#BCBCC0' }}
              size={40}>{`${userStore.userInfo?.first_name
              ?.toUpperCase()
              ?.trim()
              ?.charAt(0)}${userStore.userInfo?.last_name
              ?.toUpperCase()
              ?.trim()
              ?.charAt(0)}`}</Avatar>
          )}
          <p>{`${userStore.userInfo?.first_name} ${userStore.userInfo?.last_name}`}</p>
        </div>
        <div className={styles.item} onClick={onLogoutClick}>
          <span>{t(i18nKey.menu.logout)}</span>
        </div>
      </div>
    );
  };

  return (
    <Row
      style={{ width: '100%' }}
      className={styles.headerRight}
      justify={'end'}
      align={'middle'}>
      <div className={styles.headerRight_btn}>
        <Popover
          placement="bottomRight"
          content={HeaderMenu}
          open={openPopupProfile}
          onOpenChange={(open) => setOpenPopupProfile(open)}
          trigger="click"
          style={{ width: 50 }}>
          {userStore.userInfo?.avatar ? (
            <Avatar
              className={styles.headerRight_btn_user}
              src={userStore.userInfo?.avatar}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Avatar
              className={styles.headerRight_btn_user}
              style={{ cursor: 'pointer', color: 'BCBCC0' }}
              size={40}>
              {`${userStore.userInfo?.first_name
                ?.toUpperCase()
                ?.trim()
                ?.charAt(0)}${userStore.userInfo?.last_name
                ?.toUpperCase()
                ?.trim()
                ?.charAt(0)}`}
            </Avatar>
          )}
        </Popover>
      </div>
      <Modal
        centered
        wrapClassName={styles.bodyModal}
        open={open}
        closable={false}
        onCancel={onCancel}
        width={343}
        footer={
          <div className={styles.footer}>
            <Row gutter={12}>
              <Col span={12}>
                <Button
                  onClick={onCancel}
                  className={styles.footer_cancel}
                  type="default">
                  {t(i18nKey.button.cancel)}
                </Button>
              </Col>
              <Col span={12}>
                <Button className={styles.footer_submit}>
                  {t(i18nKey.button.ok)}
                </Button>
              </Col>
            </Row>
          </div>
        }>
        <div className={styles.header}>
          <Typography className={styles.header_title}>
            {t(i18nKey.menu.logout)}
          </Typography>
          <span className={styles.header_desc}>
            {t(i18nKey.confirmationPopup.logout)}
          </span>
        </div>
      </Modal>
    </Row>
  );
};

export default observer(AppHeader);
