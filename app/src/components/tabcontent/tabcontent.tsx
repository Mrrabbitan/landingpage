import React, { useState, useEffect } from "react";
import { Row, Col, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { url } from "inspector";

export const Tabcontent: React.FC<{
  images: Object;
  type: Object;
}> = images => {
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



  const src = "/picInner/" + images["images"] + ".png";
  const downloadSrc =
    "https://s3.cn-north-1.amazonaws.com.cn/momenta-download/mona-latest." +
    images["type"];
  return (
    <div  className={style.tabContent}>
      
        <div  className={style.topContent}>
          <Col span={24} offset={0} className={style.leftElement}>
            <img alt="roundtop" className={style.imgSize} src={src} />
            <span className={style.spanText}>
              &nbsp;&nbsp;{images["images"]} (V1.3.25.1.{images["type"]})
            </span>
          </Col>
          <div className={style.topButton} >
            <Button
              icon="download"
              disabled={temp}
              type="primary"
              size="large"
              style={{
                //  color: '#fff',
               borderRadius: "20px" }}
              href={downloadSrc}
            >
              下载
            </Button>
          </div>
        </div>
        <div className={style.bottomContent}>
          <Checkbox autoFocus={false} onChange={stateChange} checked={!temp}>
            同意软件
            <Link to="/license">
              <span>使用协议</span>
            </Link>
          </Checkbox>
        </div>
    </div>
  );
};
