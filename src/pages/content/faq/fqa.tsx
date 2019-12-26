import React from "react";
import style from "./index.module.scss";
import DocumentTitle from "react-document-title";
import FAQDom from "./FAQ-dom";

export const FQA: React.FC = () => {
  return (
    <DocumentTitle title="FAQ 常见问题 | Momenta">
      <div className={style.FAQ}>
        <div className={style.leftBox}>
          <img alt='leftimg' className={style.leftImg} src="/picInner/geo_shape_2.png" />
        </div>
        <div
          className={style.rightText}
          dangerouslySetInnerHTML={{
            __html: FAQDom
          }}
        ></div>
      </div>
    </DocumentTitle>
  );
};
