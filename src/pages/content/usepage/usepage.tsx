import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import DocumentTitle from "react-document-title";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import termsDom from "./terms-dom";
import { Col, Row, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

export const Usepage: React.FC = () => {
  const [checked, setChecked] = useState<any>(false);

  useEffect(() => {
    let checkedInCookie = "1" === localStorage.getItem("checked");
    setChecked(checkedInCookie);
  }, []);

  const onCheckboxChanged = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
    localStorage.setItem("checked", e.target.checked ? "1" : "0");
  };

  return (
    <DocumentTitle title="用户协议 | Momenta">
      <Row>
        <Col className={style.userTerms}>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "5rem",
              marginBottom: "4rem"
            }}
          >
            Momenta 软件使用许可协议
          </p>
          <div
            className={style.text}
            dangerouslySetInnerHTML={{
              __html: termsDom
            }}
          ></div>
          <Col className={style.checkboxItem} span={24}>
            <Checkbox
              style={{ fontSize: "14px" }}
              onChange={onCheckboxChanged}
              checked={checked}
            >
              同意软件使用协议
            </Checkbox>
          </Col>
          <Col className={style.buttonItem} span={24}>
            <Button
              href="#/download"
              icon="download"
              disabled={!checked}
              type="primary"
              size="large"
              style={{
                borderRadius: "20px"
                // background: color,
                // color: "#fff"
              }}
            >
              去下载
            </Button>
          </Col>
        </Col>
      </Row>
    </DocumentTitle>
  );
};
