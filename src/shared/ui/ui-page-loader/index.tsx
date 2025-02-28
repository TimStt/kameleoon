import React from "react";
import UILoader from "../ui-loader";
import style from "./ui-page-loader.module.scss";

const UIPageLoader = () => {
  return (
    <div className={style.root}>
      <UILoader width="16px" height="80px" />
    </div>
  );
};

export default UIPageLoader;
