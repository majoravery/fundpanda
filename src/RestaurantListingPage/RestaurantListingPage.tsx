import React, { useState } from "react";
import Carousel from "components/Carousel/Carousel";
import search from "Homescreen/assets/search.svg";
import { useNavigate } from "react-router-dom";
import cls from "classnames";
import heart from "./assets/heart.svg";
import cart from "./assets/cart.svg";
import filter from "./assets/filter.svg";
import back from "./assets/back.svg";
import swipe from "./assets/swipe.svg";

import "./RestaurantListingPage.scss";
import Tag from "components/Tag/Tag";

const FIXED_TITLE =
  "Set a fixed dietary requirement to enhance ordering experiences";
const FIXED_SUBTITLE = "Special Diet Selections";
const FLEX_TITLE = "Narrow down your search ";
const FLEX_SUBTITLE = "What do you feel like eating today?";

const FIXED_PREFERENCE_OPTION = [
  "halal",
  "vegan",
  "vegetarian",
  "gluten free",
  "lactose free",
  "keto diet",
  "no restrictions",
];
const FLEX_PREFERENCE_OPTION = [
  "noodes",
  "rice",
  "soup",
  "dessert",
  "pizza",
  "bubble tea",
  "salad",
  "fast food",
];

function RestaurantListingPage() {
  const navigate = useNavigate();
  const [showPreference, setShowPreference] = useState<"fixed" | "flex" | null>(
    null
  );
  const [fixedPreferences, setFixedPreferences] = useState<string[]>([]);
  const [flexPreferences, setFlexPreferences] = useState<string[]>([]);
  console.log(fixedPreferences);
  console.log(flexPreferences);

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
          <div
            className="foodswipeIcon"
            onClick={() => setShowPreference("fixed")}
          >
            <img src={swipe} alt="swipe" />
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

      {showPreference && (
        <div className="preference">
          <div className="blank">
            <div className="handle"></div>
          </div>
          <div className="content">
            <div className="title">
              {showPreference === "fixed" ? FIXED_TITLE : FLEX_TITLE}
            </div>
            <div className="subtitle">
              {showPreference === "fixed" ? FIXED_SUBTITLE : FLEX_SUBTITLE}
            </div>
            <div className="container">
              <div className="options">
                {showPreference === "fixed"
                  ? FIXED_PREFERENCE_OPTION.map((option) => (
                      <div className="option" key={option}>
                        <Tag
                          content={option}
                          type={
                            fixedPreferences.includes(option)
                              ? "filled"
                              : undefined
                          }
                          onClick={() => {
                            if (fixedPreferences.includes(option))
                              setFixedPreferences((p) =>
                                p.filter((o) => o !== option)
                              );
                            else setFixedPreferences((p) => [...p, option]);
                          }}
                        />
                      </div>
                    ))
                  : FLEX_PREFERENCE_OPTION.map((option) => (
                      <div className="option" key={option}>
                        <Tag
                          content={option}
                          type={
                            flexPreferences.includes(option)
                              ? "filled"
                              : undefined
                          }
                          onClick={() => {
                            if (flexPreferences.includes(option))
                              setFlexPreferences((p) =>
                                p.filter((o) => o !== option)
                              );
                            else setFlexPreferences((p) => [...p, option]);
                          }}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="footer">
            <div
              className={cls("button", {
                disabled:
                  showPreference === "fixed"
                    ? fixedPreferences.length === 0
                    : flexPreferences.length === 0,
              })}
              onClick={() => {
                if (showPreference === "fixed" && fixedPreferences.length !== 0)
                  setShowPreference("flex");
                if (showPreference === "flex" && flexPreferences.length !== 0)
                  navigate("/swipe");
              }}
            >
              {showPreference === "fixed" ? "Next" : "Start Swiping"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantListingPage;
