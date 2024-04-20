import { useLoadScript } from '@react-google-maps/api';
import { Col, Drawer, Layout, Row, theme } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AppLogo from 'src/assets/icons/logo-white.png';
import menuIcon from 'src/assets/icons/menu.svg';
import useMenuProfile from 'src/constants/menu-profile';
import { API_KEY } from 'src/environments/environment';
import AppHeader from './components/header/header';
import AppMenu from './components/menu/menu';
import ProfileMenu from './components/profile/menu';
import styles from './main.layout.module.less';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const location = useLocation();
  const menu = useMenuProfile();
  const menuProfiles = menu.map((item) => item?.key);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleMenuBar = () => {
    setMenuBar(!menuBar);
  };
  return (
    <Layout className={styles.container}>
      <Layout>
        <Drawer
          className={styles.container_menuDrawer}
          title="Menu"
          placement="left"
          closable
          width="400px"
          onClose={toggleMenuBar}
          open={menuBar}>
          <AppMenu setMenuBar={setMenuBar} />
        </Drawer>

        <Sider
          style={{ background: colorBgContainer, flexBasis: '280px' }}
          collapsible
          collapsed={collapsed}
          trigger={null}
          className={`${styles.container_slider} ${
            collapsed && styles.container_slider_collapsed
          }`}>
          <Header className={styles.container_headerSider}>
            <Row
              style={{
                width: '100%',
                height: '100%'
              }}
              justify={'space-between'}
              align={'middle'}>
              <Col span={12}>
                  <div>
                    <Link to={''}>
                      <div className={styles.container_logoApp}>
                        <img src={AppLogo} style={{ width: '100%' }} />
                      </div>
                    </Link>
                  </div>
              </Col>
              <Col xs={0} sm={0} md={1} lg={1} xl={1}>
                <div
                  className={styles.container_collapse}
                  style={{ marginLeft: collapsed ? 20 : 0 }}>
                  <img src={menuIcon} onClick={toggleCollapsed} />
                </div>
              </Col>
            </Row>
          </Header>
          {menuProfiles.includes(location.pathname) ? (
            <ProfileMenu />
          ) : (
            <AppMenu />
          )}
        </Sider>
        <Layout>
          <Header className={styles.container_headerContent}>
            <Row justify={'space-between'}>
              <Col xs={8} sm={8} md={0} lg={0} xl={0}>
                <Row
                  style={{ width: '100%', height: '100%', marginLeft: 0 }}
                  align={'middle'}
                  gutter={16}>
                  <Col xl={2} sm={8} xs={8}>
                    <div className={styles.container_sidebar}>
                      <img src={menuIcon} onClick={toggleMenuBar} />
                    </div>
                  </Col>
                  <Col xl={22} sm={16} xs={16}>
                      <div>
                        <Link to={''}>
                          <div className={styles.container_logoApp}>
                            <img src={AppLogo} style={{ width: '100%' }} />
                          </div>
                        </Link>
                      </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={16} sm={16} md={24} lg={24} xl={24}>
                <AppHeader />
              </Col>
            </Row>
          </Header>
          <Content className={styles.container_content}>
            {isLoaded && <Outlet />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default observer(MainLayout);
