import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { Link, Outlet } from "react-router-dom";

import GlobalStyles from "./components/Styles/Global.styled";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainMenu from "./components/Menu/Menu";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Layout>
        <MainMenu />
        <Layout.Content style={{ padding: "20px" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
