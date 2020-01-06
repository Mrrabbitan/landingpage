import React, { useState } from "react";
import { Row, Col, Tabs } from "antd";
import style from "./index.module.scss";
import { Tabcontent } from "../../components";
import axios from "axios";

const { TabPane } = Tabs;
export const Menudownload: React.FC = () => {
  const [state, setstate] = useState<string>("v...");

  const version3_url =
    "https://s3.cn-north-1.amazonaws.com.cn/momenta-download/mona-version.3";

  (async function getversion() {
    let data = (await axios.get<string>(version3_url)).data.trim();
    console.log(data);
    setstate(data ? data : "v...");
  })();
  const tabinfo = [
    {
      key: "Windows",
      tab: "Windows",
      type: "zip",
      version: state
    },
    { key: "macOS", tab: "macOS", type: "dmg", version: state },
    { key: "Linux", tab: "Linux", type: "tar.gz", version: state }
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
              <Tabcontent
                images={i.key}
                type={i.type}
                version={i.version}
              ></Tabcontent>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
