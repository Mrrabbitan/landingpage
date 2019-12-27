import React from "react";
import style from "./index.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      © {new Date().getFullYear()} Momenta. All rights reserved. Powered by
      Closed Loop Automation.
    </div>
  );
};
