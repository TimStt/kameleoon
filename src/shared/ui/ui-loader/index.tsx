import React from "react";
import style from "./loader.module.scss";

const UILoader = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: string;
  height?: string;
}) => {
  const styleProps = {
    "--color-loader": color || "var(--color-black-1)",
    "--width": width || "8px",
    "--height": height || "40px",
  } as React.CSSProperties;

  return <span className={style.root} style={styleProps}></span>;
};

export default UILoader;
