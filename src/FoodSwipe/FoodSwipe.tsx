/* eslint-disable jsx-a11y/heading-has-content */
import "./FoodSwipe.scss";

import { useState } from "react";
import TinderCard from "react-tinder-card";
import { useLongPress } from "use-long-press";

import Header from "../components/Header/Header";
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
  const [lastDirection, setLastDirection] = useState<Direction>();

  const swiped = (direction: Direction, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  console.log("lastDirection", lastDirection);

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
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
        {db.map((food) => {
          return (
            <TinderCard
              className="swipe"
              key={food.name}
              // swipeRequirementType="position"
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, food.name)}
              onCardLeftScreen={() => outOfFrame(food.name)}
            >
              <div
                style={{ backgroundImage: `url(${food.url})` }}
                className="card"
                {...bind()}
              >
                {/* <h3>{food.name}</h3> */}
                <button className="fp-btn" onClick={() => alert(`Let's order`)}>
                  ORDER
                </button>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}
