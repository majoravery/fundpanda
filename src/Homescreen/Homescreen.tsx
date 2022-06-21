import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Cuisines from "../components/Cuisines/Cuisines";
import Header from "../components/Header/Header";

import search from "./assets/search.svg";

import "./Homescreen.css";

const Homescreen: React.FC = () => {
  return (
    <div className="Homescreen">
      <Header title="Home" subtitle="Robinson Road" />

      <div className="Homescreen-search">
        <div className="Homescreen-searchInner">
          <img src={search} alt="search" />
          <p>Search for shops & restaurants</p>
        </div>
      </div>

      <div className="Homescreen-cards">
        <div className="Homescreen-card m-foodDelivery">
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
