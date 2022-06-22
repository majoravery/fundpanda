import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Cuisines from "../components/Cuisines/Cuisines";
import Header from "../components/Header/Header";

import search from "./assets/search.svg";
import cart from "./assets/cart.svg";
import heart from "./assets/heart.svg";
import menu from "./assets/menu.svg";

import "./Homescreen.css";
import { useNavigate } from "react-router-dom";

const Homescreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Homescreen">
      <Header
        theme="pink"
        title="Home"
        subtitle="Robinson Road"
        leftIcons={<img src={menu} alt="menu" />}
        rightIcons={
          <>
            <img src={heart} alt="heart" />
            <img src={cart} alt="cart" />
          </>
        }
      />

      <div className="Homescreen-search">
        <div className="Homescreen-searchInner">
          <img src={search} alt="search" />
          <p>Search for shops & restaurants</p>
        </div>
      </div>

      <div className="Homescreen-cards">
        <div
          className="Homescreen-card m-foodDelivery"
          onClick={() => navigate("/restaurant")}
        >
          <p className="Homescreen-cardTitle">Food delivery</p>
          <p className="Homescreen-cardSubtitle">Order the food you love</p>
        </div>
        <div className="Homescreen-card m-pandamart">
          <p className="Homescreen-cardTitle">pandamart</p>
          <p className="Homescreen-cardSubtitle">20% off</p>
        </div>
        <div className="Homescreen-card m-pickUp">
          <p className="Homescreen-cardTitle">Pick-up</p>
          <p className="Homescreen-cardSubtitle">Skip the line</p>
        </div>
        <div className="Homescreen-card m-shops">
          <p className="Homescreen-cardTitle">Shops</p>
          <p className="Homescreen-cardSubtitle">Get essentials</p>
        </div>
        <div className="Homescreen-card m-dineIn">
          <p className="Homescreen-cardTitle">Dine-in</p>
          <p className="Homescreen-cardSubtitle">Up to 20% off</p>
        </div>
      </div>

      <section>
        <div className="Homescreen-recentlyOrdered">
          <Carousel title="Recently ordered" />
        </div>
      </section>

      <section>
        <div className="Homescreen-cuisines">
          <Cuisines />
        </div>
      </section>
    </div>
  );
};

export default Homescreen;
