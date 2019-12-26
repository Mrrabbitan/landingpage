import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import DocumentTitle from "react-document-title";
import termsDom from "./terms-dom";
import { Col, Row, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

export const Usepage: React.FC = () => {
  const [stage, setStage] = useState<any>(false);
  
  
  
  const tempstatus = document.cookie.split(';')

  const deep=()=>{
  for( let i of tempstatus){
    if(i.indexOf('Userstatus')>0){
      const tempCookie = (i.split('='))[1]
      return tempCookie
    }
}

}
var temp = deep() === 'false'?false:true

 
useEffect(() => {}, [stage, temp]);
  const stateChange = () => {
    console.log(temp)
    if (stage == false) {
      setStage(true);
     
      document.cookie='Userstatus='+stage;
    } else {
      setStage(false);
     
      document.cookie='Userstatus='+stage
    }
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
            <Checkbox style={{ fontSize: "14px" }} onChange={stateChange} checked={!temp}>
              同意软件使用协议
            </Checkbox>
          </Col>
          <Col className={style.buttonItem} span={24}>
            <Button
              href="#/download"
              icon="download"
              disabled={temp}
              type="primary"
              size="large"
              style={{
                borderRadius: "20px",
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
