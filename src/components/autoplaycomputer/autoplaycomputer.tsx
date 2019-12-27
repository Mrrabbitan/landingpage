import React from "react";
import style from "./index.module.scss";
import { Row, Col, Carousel } from "antd";
import computer from "../../../public/picInner/display_large.png";

export const AutoplayComputer: React.FC<{ images: string[] }> = ({
  images
}) => {
  return (
    <Row>
      <Col span={8}>
        <div
          className={style.autoplay}
          style={{
            background: "url(" + computer + ") no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
          <Carousel autoplay effect="fade">
            {images.map(i => {
              return (
                <div key={i}>
                  <img src={i} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};
