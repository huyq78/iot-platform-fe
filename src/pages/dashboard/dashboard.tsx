/*eslint-disable*/
import { SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Drawer,
  Empty,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Tag,
  Typography
} from 'antd';
import 'chart.js/auto';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import AccessDeniedDashboard from 'src/components/access-denied/access-denied-dashboard';
import Loader from 'src/components/loader';
import NoData from 'src/components/no-data/no-data';
import { PAGE_ROUTE } from 'src/constants/route';
import {
  Severity,
  Status,
  getStatus,
  tagColorSeverity
} from 'src/constants/utils';
import { normalizeFormatDate } from 'src/helpers/common.utils';
import { uniqueKey } from 'src/helpers/string.utils';
import useStore from 'src/hooks/use-store';
import { i18nKey } from 'src/locales/i18n';
import styles from './dashboard.module.less';
import DropDownWithSearch, {
  IDropDownPlant
} from 'src/components/drop-down-with-search/drop-down-with-search';
import ArrowDown from 'src/assets/icons/arrow-down.svg';
import useViewport from 'src/hooks/use-viewport';

interface IStatistical {
  status?: string;
  count?: number;
}

interface IWrapperComponent {
  children?: React.ReactNode;
  isRenderNodata?: boolean;
}

const Dashboard: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation();
  const viewPort = useViewport();
  const isMobile = viewPort.width < 768;
  const navigator = useNavigate();
  const [drawerAlarm, setDrawerAlarm] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [statisticalStatusPlant, setStatisticalPlantStatus] = useState<
    IStatistical[]
  >([]);
  const [dropDownPlant, setDropDownPlant] = useState<IDropDownPlant[]>();
  const [isOpenCollapse, setIsOpenConllapse] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>();
  const [valueSelect, setValueSelect] = useState<string>();
  const [tenantListFilter, setTenantListFilter] = useState<any[]>([]);
  const [displaySelect, setDisplaySelect] = useState<boolean>(false);

  return (
    <>
      <div className={styles.wrapper}>
      </div>
    </>
  );
};

export default observer(Dashboard);
