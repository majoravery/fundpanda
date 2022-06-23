/* eslint-disable jsx-a11y/heading-has-content */
import "./FoodSwipe.scss";

import React, { useMemo } from "react";
import TinderCard from "react-tinder-card";
import { useLongPress } from "use-long-press";

import Header from "../components/Header/Header";
import { ReactComponent as IconHeart } from "./icons/heart.svg";
import ImgStar from "./icons/star.png";
import dinesh from "./images/1.jpg";
import erlich from "./images/2.jpg";
import jared from "./images/3.jpg";
import monica from "./images/4.jpg";
import richard from "./images/5.jpg";
import { useNavigate } from "react-router-dom";
import { useGetRecommendations } from "api/recommendations";
import { mapDishIdToImage } from "utils";
import { addYumlist } from "api/yumlist";

declare type Direction = "left" | "right" | "up" | "down";

const db = [
  {
    name: "Vegan Burger",
    url: richard,
    price: 20,
    delivery: 1.8,
  },
  {
    name: "Erlich Bachman",
    url: erlich,
    price: 25,
    delivery: 1.9,
  },
  {
    name: "Monica Hall",
    url: monica,
    price: 11,
    delivery: 1.3,
  },
  {
    name: "Jared Dunn",
    url: jared,
    price: 15,
    delivery: 1.2,
  },
  {
    name: "Dinesh Chugtai",
    url: dinesh,
    price: 30,
    delivery: 1.1,
  },
];

export const FoodSwipeComponent = () => {
  const navigate = useNavigate();
  const { data } = useGetRecommendations({
    cid: "sg109sdu",
    city: "singapore",
  });
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef<any>()),
    []
  );

  const swiped = (direction: Direction, nameToDelete: string) => {
    console.log("direction", direction);
    if (direction === "right") {
      addYumlist({ customer_id: "sg109sdu", dish_id: +nameToDelete });
    } else if (direction === "left") {
    }
  };

  const outOfFrame = (name: string) => {
    console.log(name + " is outOfFrame!");
  };

  const bind = useLongPress(
    () => {
      console.log("show info");
    },
    { threshold: 500 }
  );

  return (
    <div id="FoodSwipe">
      <div className="CardContainer">
        {data &&
          data.map((food, index) => {
            return (
              <TinderCard
                ref={childRefs[index] as any}
                className="swipe"
                key={food.dish_id}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, food.dish_id)}
                onCardLeftScreen={() => outOfFrame(food.dish_name)}
              >
                <div
                  style={{
                    backgroundImage: `url(${mapDishIdToImage[food.dish_id]})`,
                  }}
                  className="card"
                  {...bind()}
                >
                  <div className="Top">
                    <div className="DiscountBadge">{food.deal}</div>
                    <IconHeart
                      className="HeartTop"
                      onPointerDown={() => navigate("/yumlist")}
                    />
                  </div>
                  {/* <div className="Action">
                  <img
                    src={ImgNope}
                    alt="nope"
                    onClick={() => {
                      childRefs[index].current.swipe("left");
                    }}
                  />
                  <img
                    src={ImgLike}
                    alt="like"
                    onClick={() => childRefs[index].current.swipe("right")}
                  />
                </div> */}
                  <h1 className="nope">NOPE</h1>
                  <h1 className="like">LIKE</h1>
                </div>
                <div className="Info">
                  <div className="row">
                    <div className="Name">{food.dish_name}</div>
                    <div>S${food.price}</div>
                  </div>
                  <div className="row">
                    <div>{food.restaurant_name}</div>
                    <div className="Review">
                      <img src={ImgStar} alt="review" />
                      <div className="Score">
                        {food.rating} <span> (764)</span>
                      </div>
                    </div>
                  </div>
                  <div className="row DeliveryFee">{food.delivery_fee}</div>
                </div>
                <button
                  className="fp-btn"
                  onClick={() => navigate(`/dish/${food.dish_id}`)}
                  onPointerDown={() => navigate(`/dish/${food.dish_id}`)}
                >
                  ORDER
                </button>
              </TinderCard>
            );
          })}
      </div>
    </div>
  );
};

export default function FoodSwipe() {
  return (
    <div id="FoodSwipe">
      <Header title="Discover" subtitle="Swipe to find your love" />
      <FoodSwipeComponent />
    </div>
  );
}
