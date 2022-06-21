import React from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="Header">
      <div className="Header-leftNav">
        <img src="https://dummyimage.com/17x17/fff/fff" alt="menu" />
      </div>
      <div className="Header-info">
        <p className="Header-title">{title}</p>
        <p className="Header-subtitle">{subtitle}</p>
      </div>
      <div className="Header-rightNav">
        <img src="https://dummyimage.com/17x17/fff/fff" alt="heart" />
        <img src="https://dummyimage.com/17x17/fff/fff" alt="cart" />
      </div>
    </div>
  );
};

export default Header;
