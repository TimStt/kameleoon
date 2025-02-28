import React from "react";
import style from "./layout.module.scss";

const Layout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <header className={style.root}>
        <div className={style.container_text}>
          <h1 className={style.title}> {title}</h1>
          <span className={style.sub_title}>{subtitle}</span>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
