import "./Header.css";

import React from "react";

import cart from "./assets/cart.svg";
import heart from "./assets/heart.svg";
import menu from "./assets/menu.svg";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  theme?: "pink" | "white";
  title: string;
  subtitle?: string;
  leftIcons?: JSX.Element;
  rightIcons?: JSX.Element;
};

const Header: React.FC<HeaderProps> = ({
  theme = "pink",
  title,
  subtitle,
  leftIcons,
  rightIcons,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`Header m-${theme}`}>
      <div className="Header-leftNav">
        {leftIcons ? leftIcons : <img src={menu} alt="menu" />}
      </div>
      <div className="Header-info">
        <p className="Header-title">{title}</p>
        {subtitle && <p className="Header-subtitle">{subtitle}</p>}
      </div>
      <div className="Header-rightNav">
        {rightIcons ? (
          rightIcons
        ) : (
          <>
            <img src={heart} alt="heart" onClick={() => navigate("/yumlist")} />
            <img src={cart} alt="cart" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
