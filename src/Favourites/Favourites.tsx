import React, { useState } from "react";
import Header from "components/Header/Header";
import "./Favourites.css";

import back from "../assets/back-pink.svg";
import cart from "../assets/cart-pink.svg";

type Tab = "restaurants" | "shops" | "foods";

const Favourites = () => {
  const [activeTab, setActiveTab] = useState<Tab>("restaurants");

  const handleTabClick = (e: any) => {
    setActiveTab(e.target.dataset.tab);
  };

  return (
    <div className="Favourites">
      <Header
        theme="white"
        title="Favourites"
        leftIcons={<img src={back} alt="back" />}
        rightIcons={<img src={cart} alt="cart" />}
      />

      <div className="Favourites-tabs">
        <div
          className="Favourites-tab  m-active"
          data-tab="restaurants"
          onClick={handleTabClick}
        >
          Restaurants
        </div>
        <div
          className="Favourites-tab"
          data-tab="shops"
          onClick={handleTabClick}
        >
          Shops
        </div>
        <div
          className="Favourites-tab"
          data-tab="foods"
          onClick={handleTabClick}
        >
          Foods
        </div>
      </div>

      {activeTab === "restaurants" && (
        <div className="Favourites-restaurants"></div>
      )}

      {activeTab === "shops" && <div className="Favourites-shops"></div>}

      {activeTab === "foods" && <div className="Favourites-foods"></div>}
    </div>
  );
};

export default Favourites;
