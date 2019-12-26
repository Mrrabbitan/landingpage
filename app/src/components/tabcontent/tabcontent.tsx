import React, { useState, useEffect } from "react";
import { Col, Button, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export const Tabcontent: React.FC<{
  images: Object;
  type: Object;
}> = images => {
  const [checked, setChecked] = useState<any>(false);

  useEffect(() => {
    let checkedInCookie = "1" === localStorage.getItem("checked");
    setChecked(checkedInCookie);
  }, []);

  const onCheckboxChanged = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
    localStorage.setItem("checked", e.target.checked ? "1" : "0");
  };

  const src = "/picInner/" + images["images"] + ".png";
  const downloadSrc = `https://s3.cn-north-1.amazonaws.com.cn/momenta-download/mona-latest.${images["type"]}`;

  return (
    <div className={style.tabContent}>
      <div className={style.topContent}>
        <Col span={24} offset={0} className={style.leftElement}>
          <img alt="roundtop" className={style.imgSize} src={src} />
          <span className={style.spanText}>
            &nbsp;&nbsp;{images["images"]} (V1.3.25.1.{images["type"]})
          </span>
        </Col>
        <div className={style.topButton}>
          <Button
            icon="download"
            disabled={!checked}
            type="primary"
            size="large"
            style={{ borderRadius: "20px" }}
            href={downloadSrc}
          >
            下载
          </Button>
        </div>
      </div>
      <div className={style.bottomContent}>
        <Checkbox
          autoFocus={false}
          onChange={onCheckboxChanged}
          checked={checked}
        >
          同意软件
          <Link to="/license">使用协议</Link>
        </Checkbox>
      </div>
    </div>
  );
};
