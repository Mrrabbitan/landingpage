import React from "react";
import { Row, Col, Tabs } from "antd";
import style from "./index.module.scss";
import { Tabcontent } from "../../components";

const { TabPane } = Tabs;
export const Menudownload: React.FC = () => {
  const tabinfo = [
    { key: "Windows", tab: "Windows", type: "zip" },
    { key: "macOS", tab: "macOS", type: "dmg" },
    { key: "Linux", tab: "Linux", type: "tar.gz" }
  ];
  return (
    <div className={style.list}>
      <Tabs
        defaultActiveKey="Windows"
        onChange={() => {}}
        style={{ border: "none" }}
      >
        {tabinfo.map(i => {
          return (
            <TabPane key={i.key} tab={i.tab} className={style.Tabpane}>
              <Tabcontent images={i.key} type={i.type}></Tabcontent>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
