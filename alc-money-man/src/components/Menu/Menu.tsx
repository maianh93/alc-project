import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

import {
  DesktopOutlined,
  InboxOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const items = [
  {
    label: <Link to="/">Trang chủ</Link>,
    key: "homepage",
    icon: <DesktopOutlined />
  }, 
  {
    label: "Khai báo",
    key: "declare",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/declare/assets">Tài sản</Link>,
        key: "assets",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/declare/incomingandspending">Thu - chi</Link>,
        key: "incomingandspending",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/declare/objects">Đối tượng</Link>,
        key: "objects",
        icon: <AppstoreOutlined />
      }
    ]
  }, 
  {
    label: "Hạch toán thu",
    key: "incomeaccounting",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/incomeaccounting/income">Thu nhập</Link>,
        key: "income",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/incomeaccounting/receives">Thu nợ</Link>,
        key: "receives",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/spendaccounting/payable">Vay tiền</Link>,
        key: "payable",
        icon: <AppstoreOutlined />
      },
    ]
  },
  {
    label: "Hạch toán chi",
    key: "spendaccounting",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <Link to="/spendaccounting/spend">Chi tiêu</Link>,
        key: "spend",
        icon: <MailOutlined />
      },
      {
        label: <Link to="/spendaccounting/payable">Trả nợ</Link>,
        key: "payable",
        icon: <AppstoreOutlined />
      },
      {
        label: <Link to="/incomeaccounting/receives">Cho vay</Link>,
        key: "receives",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: <Link to="/detailreport">Báo cáo chi tiết</Link>,
    key: "detailreport",
    icon: <InboxOutlined />
  },
  {
    label: <Link to="/synthesisreport">Báo cáo tổng hợp</Link>,
    key: "synthesisreport",
    icon: <InboxOutlined />
  },
  {
    label: <Link to="/about">About Page</Link>,
    key: "about",
    icon: <InboxOutlined />
  }
];

  const MainMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <div className="main-menu">
          <Layout.Sider
            style={{ background: "white", minHeight: "100vh" }}
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          >
            <Menu theme="light" mode="inline" items={items} />
          </Layout.Sider>
      </div>
    );
  }
  
  export default MainMenu;