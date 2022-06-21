import React from "react";

import "./Header.css";

type HeaderProps = {
  theme: "pink" | "white";
  title: string;
  subtitle?: string;
  leftIcons: JSX.Element;
  rightIcons: JSX.Element;
};

const Header: React.FC<HeaderProps> = ({
  theme,
  title,
  subtitle,
  leftIcons,
  rightIcons,
}) => {
  return (
    <div className={`Header m-${theme}`}>
      <div className="Header-leftNav">{leftIcons}</div>
      <div className="Header-info">
        <p className="Header-title">{title}</p>
        {subtitle && <p className="Header-subtitle">{subtitle}</p>}
      </div>
      <div className="Header-rightNav">{rightIcons}</div>
    </div>
  );
};

export default Header;
