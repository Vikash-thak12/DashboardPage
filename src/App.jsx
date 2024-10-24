import { Layout } from "antd"
const { Sider, Header, Content} = Layout;
const App = () => {
  return (
    <Layout>
      <Sider></Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default App;