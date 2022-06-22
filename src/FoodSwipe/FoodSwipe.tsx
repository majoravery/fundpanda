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

declare type Direction = "left" | "right" | "up" | "down";

const db = [
  {
    name: "Richard Hendricks",
    url: richard,
  },
  {
    name: "Erlich Bachman",
    url: erlich,
  },
  {
    name: "Monica Hall",
    url: monica,
  },
  {
    name: "Jared Dunn",
    url: jared,
  },
  {
    name: "Dinesh Chugtai",
    url: dinesh,
  },
];

export default function FoodSwipe() {
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef<any>()),
    []
  );

  const swiped = (direction: Direction, nameToDelete: string) => {
    if (direction === "right") {
      console.log("direction", direction);
    } else if (direction === "left") {
      console.log("direction", direction);
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
      <Header title="Discover" subtitle="Swipe to find your love" />
      <div className="CardContainer">
        {db.map((food, index) => {
          return (
            <TinderCard
              ref={childRefs[index] as any}
              className="swipe"
              key={food.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, food.name)}
              onCardLeftScreen={() => outOfFrame(food.name)}
            >
              <div
                style={{ backgroundImage: `url(${food.url})` }}
                className="card"
                {...bind()}
              >
                <div className="Top">
                  <div className="DiscountBadge">Discount 5%</div>
                  <IconHeart className="HeartTop" />
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
                <h1 className="like">LIKE</h1>
                <h1 className="nope">NOPE</h1>
              </div>
              <div className="Info">
                <div className="row">
                  <div className="Name">Vegan Burger</div>
                  <div>$10.00</div>
                </div>
                <div className="row">
                  <div>Hans’ Somerset</div>
                  <div className="Review">
                    <img src={ImgStar} alt="review" />
                    <div className="Score">
                      4.9 <span> (764)</span>
                    </div>
                  </div>
                </div>
                <div className="row DeliveryFee">$1.99 delivery</div>
              </div>
              <button className="fp-btn" onClick={() => alert(`Let's order`)}>
                ORDER
              </button>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}
