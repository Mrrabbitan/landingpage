import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";
import image1 from "../../../../public/picInner/picture_1.png";
import image2 from "../../../../public/picInner/autoplay2.png";
import image3 from "../../../../public/picInner/autoplay3.png";
import { AutoplayComputer, Menudownload } from "../../../components/index";
import DocumentTitle from "react-document-title";

export const Download: React.FC = () => {
  const images = [image1, image2, image3];
  return (
    <DocumentTitle title="下载 | Momenta">
      <Row>
        <Col span={24} className={style.Frontpage}>
          <Col span={12} className={style.leftContent}>
            <img
              className={style.topImage}
              alt="some_small_pic"
              src="/picInner/geo_shape.png"
            />
            <Row>
              <Col className={style.midText}>
                <span>
                  桌面标注工具
                  <br></br>
                </span>
              </Col>
            </Row>

            <Row>
              <Col className={style.describe}>
                <p>
                  使用桌面版标注工具，可以在台式机、笔记本中以桌面软件的形式启动标注工具，从而享受愉快的标注体验。标注工具支持各大操作系统，迎合不同的用户使用习惯。
                </p>
              </Col>
            </Row>

            <Menudownload></Menudownload>
          </Col>

          <Col span={12} className={style.rightContent}>
            <AutoplayComputer images={images}></AutoplayComputer>
          </Col>
        </Col>
      </Row>
    </DocumentTitle>
  );
};
