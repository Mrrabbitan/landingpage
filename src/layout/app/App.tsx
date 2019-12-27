import React from "react";
import "./App.css";
import { Header } from "../../pages";
import { Route, HashRouter } from "react-router-dom";
import { Frontpage } from "../../pages";
import { Download } from "../../pages";
import { FQA } from "../../pages";
import { Usepage } from "../../pages";
import { Footer } from "../../pages";
import DocumentTitle from "react-document-title";
import { Row, Col } from "antd";

const App: React.FC = () => {
  const items = [
    {
      path: "/",
      text: "首页"
    },
    {
      path: "/download",
      text: "下载"
    },
    {
      path: "/terms",
      text: "使用协议"
    },
    {
      path: "/faq",
      text: "FAQ"
    }
  ];

  return (
    <DocumentTitle title="Mona 桌面标注工具 | Momenta">
      <div className="App">
        <HashRouter>
          <Header items={items} />
          <Row>
            <Col span={24} className="contentBox">
              <Route path="/" exact component={Frontpage}></Route>
              <Route path="/download" component={Download}></Route>
              <Route path="/terms" component={Usepage}></Route>
              <Route path="/faq" component={FQA}></Route>
            </Col>
          </Row>
          <Footer />
        </HashRouter>
      </div>
    </DocumentTitle>
  );
};

export default App;
