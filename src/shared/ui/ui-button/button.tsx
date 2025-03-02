import React from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "classnames";
import style from "./button.module.scss";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  styleType?: "primary" | "secondary";
  accent?: "complete_accent";
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const UIButton = ({
  children,
  className,
  styleType = "primary",
  accent,
  ...props
}: ButtonProps) => {
  const classNameCurrent = cls(className, {
    [style.primary]: styleType === "primary",
    [style.secondary]: styleType === "secondary",
    [style.complete_accent]: accent === "complete_accent",
  });

  if (props.as === "link") {
    return (
      <Link className={cls(classNameCurrent, style.root)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNameCurrent} {...props}>
      {children}
    </button>
  );
};

export default UIButton;
