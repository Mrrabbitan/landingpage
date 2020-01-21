import React from "react";
import style from "./index.module.scss";
import { Row, Col, Button } from "antd";
import image1 from "../../../../public/picInner/picture_1.png";
import image2 from "../../../../public/picInner/autoplay2.png";
import image3 from "../../../../public/picInner/autoplay3.png";
import { AutoplayComputer } from "../../../components/index";
import { Link } from "react-router-dom";

export const Frontpage: React.FC = () => {
  const images = [image1, image2, image3];
  document.cookie = "init=0";
  document.cookie = "inittype=1";
  return (
    <Row>
      <Col xs={24} sm={12} md={12} lg={24} className={style.Fontpage}>
        <Col xs={24} sm={12} md={12} lg={24} className={style.leftContent}>
          <img
            className={style.topImage}
            alt="some_small_pic"
            src="/picInner/geo_shape.png"
          />
          <Row>
            <Col className={style.midText} xs={24} sm={24} md={24} lg={24}>
              桌面标注工具
              <br></br>
              让标注更美好
            </Col>
          </Row>
          <Row>
            <Col className={style.lineButton} xs={24} sm={24} md={24} lg={24}>
              <Button
                className={style.monaButton}
                type="primary"
                href="/#/download"
                block
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开启你的 Mona
                之旅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </Col>
          </Row>

          <img
            className={style.sevenleft}
            alt="seven"
            src="/picInner/seven.png"
          ></img>
        </Col>

        <Col xs={0} sm={12} md={12} lg={12} className={style.rightContent}>
          <img
            className={style.rightImgrunsq}
            alt="runsq"
            src="/picInner/runsq.png"
          ></img>
          <img
            className={style.rightImgSquare}
            alt="square"
            src="/picInner/square.png"
          ></img>
          <div className="rightAutoplay">
            <AutoplayComputer images={images}></AutoplayComputer>
          </div>
          <img
            className={style.roundlast}
            alt="roundlast"
            src="/picInner/round.png"
          />
        </Col>
      </Col>
    </Row>
  );
};
