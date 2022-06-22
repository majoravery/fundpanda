import React from "react";
import Carousel from "components/Carousel/Carousel";
import search from "Homescreen/assets/search.svg";
import { useNavigate } from "react-router-dom";

import heart from "./assets/heart.svg";
import cart from "./assets/cart.svg";
import filter from "./assets/filter.svg";
import back from "./assets/back.svg";

import "./RestaurantListingPage.scss";

function RestaurantListingPage() {
  const navigate = useNavigate();

  return (
    <div className="RestaurantListingPage">
      <div className="header">
        <div className="left">
          <div className="back">
            <img src={back} alt="back" onClick={() => navigate(-1)} />
          </div>
          <div className="text">
            <div className="title">Food delivery</div>
            <div className="subtitle">Company</div>
          </div>
        </div>
        <div className="icon">
          <div className="foodswipeIcon" onClick={() => navigate("/foodswipe")}>
            R
          </div>
          <div className="yumlistIcon" onClick={() => navigate("/yumlist")}>
            <img src={heart} alt="heart" />
          </div>
          <div className="shoppingcartIcon">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>

      <div className="searchBar">
        <div className="searchBarInner">
          <img src={search} alt="search" />
          <p>Search for restaurants, cuisines</p>
        </div>
        <div className="filterIcon">
          <img src={filter} alt="filter" />
        </div>
      </div>

      <div className="skinnyBanner"></div>

      <div className="campaignCarousel"></div>

      <div className="foodCarouselOne">
        <Carousel title="For you (and only you)" />
      </div>

      <div className="foodCarouselTwo">
        <Carousel title="Panda picks" />
      </div>
    </div>
  );
}

export default RestaurantListingPage;
