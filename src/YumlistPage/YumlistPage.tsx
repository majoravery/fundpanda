import "./YumlistPage.scss";

import { Pinder } from "api/recommendations";
import { useGetYumlist } from "api/yumlist";
import Card from "components/Card/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import back from "./assets/back.svg";
import cross from "./assets/cross.svg";
import heart from "./assets/heart.svg";
import cls from "classnames";
import Tag from "components/Tag/Tag";
import { mapDishIdToImage } from "utils";

const tabs = [
  { value: "restaurants", label: "Restaurants" },
  { value: "shops", label: "Shops" },
  { value: "food", label: "Food" },
];

const tags = [
  "vegatrian + fast food",
  "vegetarian + desserts",
  "pizza",
  "bubble tea",
  "salad",
  "fast food",
];

const YumlistPage = () => {
  const { data } = useGetYumlist({ cid: "sg109sdu" });
  const [showYumlistItem, setShowYumlistItem] = useState<Pinder | null>(null);
  const [selectedTab, setSelectedTab] = useState("food");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  return (
    <div className="YumlistPage">
      <div className="header">
        <div className="left">
          <div className="back" onClick={() => navigate(-1)}>
            <img src={back} alt="back" />
          </div>
        </div>
        <div className="text">
          <div className="title">Favourites</div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab, idx) => (
          <div
            className={cls("tab", { selected: tab.value === selectedTab })}
            onClick={() => setSelectedTab(tab.value)}
            key={idx}
          >
            {tab.label}
            {tab.value === selectedTab && <div className="bar"></div>}
          </div>
        ))}
      </div>

      <div className="tags">
        {tags.map((tag) => (
          <div
            key={tag}
            className="yumlistTag"
            onClick={() => {
              if (selectedTags.includes(tag))
                setSelectedTags(selectedTags.filter((t) => t !== tag));
              else setSelectedTags((t) => [...t, tag]);
            }}
          >
            <Tag
              content={tag}
              type={selectedTags.includes(tag) ? "filled" : undefined}
            />
          </div>
        ))}
      </div>

      <div className="yumlist">
        {Array.isArray(data) ? (
          data.map((yumlistItem) => (
            <div
              key={yumlistItem.dish_id}
              className="yumlistItem"
              onClick={() => setShowYumlistItem(yumlistItem)}
            >
              <Card {...yumlistItem} />
            </div>
          ))
        ) : (
          <div className="empty">
            You have not selected any favourite food item
          </div>
        )}
      </div>
      {showYumlistItem && (
        <div className="yumlistModal">
          <div className="container">
            <div className="header">
              <div className="icon" onClick={() => setShowYumlistItem(null)}>
                <img src={cross} alt="Close" />
              </div>
            </div>
            <div className="content">
              <div className="contentInner">
                <div className="image">
                  <img
                    src={mapDishIdToImage[showYumlistItem.dish_id]}
                    alt="item"
                  />
                  <div className="icons">
                    <div className="deal">{showYumlistItem.deal}</div>
                    <div className="heart">
                      <img src={heart} alt="heart" />
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="row">
                    <div className="title">{showYumlistItem.dish_name}</div>
                    <div className="price">S${showYumlistItem.price}</div>
                  </div>
                  <div className="row">
                    <div className="subtitle">
                      {showYumlistItem.restaurant_name}
                    </div>
                    <div className="rating">{showYumlistItem.rating}</div>
                  </div>
                  <div className="row">
                    <div className="delivery">
                      {showYumlistItem.delivery_fee}
                    </div>
                  </div>
                </div>
                <div
                  className="orderButton"
                  onClick={() => navigate(`/dish/${showYumlistItem.dish_id}`)}
                >
                  Order
                </div>
              </div>
              {/* <FoodSwipeComponent /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YumlistPage;
