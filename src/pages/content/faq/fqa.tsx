import React from "react";
import style from "./index.module.scss";
import DocumentTitle from "react-document-title";
import FAQDom from "./FAQ-dom";

export const FQA: React.FC = () => {
  return (
    <DocumentTitle title="FAQ 常见问题 | Momenta">
      <div className={style.FAQ}>
        <img className={style.leftImg} src="/picInner/geo_shape_2.png" />
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
