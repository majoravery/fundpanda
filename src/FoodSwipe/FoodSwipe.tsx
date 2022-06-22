/* eslint-disable jsx-a11y/heading-has-content */
import "./FoodSwipe.scss";

import { useState } from "react";
import TinderCard from "react-tinder-card";

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

  return (
    <div id="FoodSwipe">
      {db.map((character) => {
        return (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
}
