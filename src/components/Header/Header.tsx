import React from "react";

import cart from "./assets/cart.svg";
import heart from "./assets/heart.svg";
import menu from "./assets/menu.svg";

import "./Header.css";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="Header">
      <div className="Header-leftNav">
        <img src={menu} alt="menu" />
      </div>
      <div className="Header-info">
        <p className="Header-title">{title}</p>
        <p className="Header-subtitle">{subtitle}</p>
      </div>
      <div className="Header-rightNav">
        <img src={heart} alt="heart" />
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
