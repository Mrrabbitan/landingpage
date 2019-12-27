import React from "react";
import style from "./header.module.scss";
import { Row, Col } from "antd";
import { HEADERMENU } from "../../components";
import { Link } from "react-router-dom";

export interface MenuItemProps {
  path: string;
  text: string;
}

//MenuItemProps[],为何要加一个[]
export const Header: React.FC<{ items: MenuItemProps[] }> = ({ items }) => {
  return (
    <Row>
      <Col className={style.app} xs={24} sm={24}>
        <Col span={2}>
          <Link to="/">
            <img className={style.logo} src="/picInner/mona-logo-v1.png" />
          </Link>
        </Col>
        <Col span={8}>
          <HEADERMENU items={items}></HEADERMENU>
        </Col>
      </Col>
    </Row>
  );
};
