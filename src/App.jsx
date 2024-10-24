import {  Button, Layout } from "antd"
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import CustomHeader from "./components/CustomHeader";
const { Sider, Header, Content} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider
      theme="light" trigger={null} collapsible collapsed={collapsed}
      className="h-screen sticky left-0 top-0 bottom-0"
      >
        <Sidebar />
        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="fixed bottom-5 left-5 h-10 w-10"
         />
      </Sider>
      <Layout>
        <Header className="bg-[#fff] text-black pt-3">
          <CustomHeader />
        </Header>
        <Content className="my-8 mx-6 p-5"></Content>
      </Layout>
    </Layout>
  );
};

export default App;