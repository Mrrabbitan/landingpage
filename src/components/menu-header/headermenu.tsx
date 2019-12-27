import React from "react";
import style from "./index.module.scss";
import { Menu, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { MenuItemProps } from "../../pages/header/header";
import useRouter from "use-react-router";

export const HEADERMENU: React.FC<{ items: MenuItemProps[] }> = ({ items }) => {
  const router = useRouter();
  return (
    <Row>
      <Col>
        <Menu
          mode="horizontal"
          className={style.list}
          theme="light"
          selectedKeys={[router.location.pathname]}
        >
          <Menu.Item key="/">
            <NavLink to="/">首页</NavLink>
          </Menu.Item>
          <Menu.Item key="/download">
            <NavLink to="/download">下载</NavLink>
          </Menu.Item>
          <Menu.Item key="/terms">
            <NavLink to="/terms">使用协议</NavLink>
          </Menu.Item>
          <Menu.Item key="/faq">
            <NavLink to="/faq">FAQ</NavLink>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
