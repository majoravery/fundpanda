/* eslint-disable jsx-a11y/heading-has-content */
import "./Demo.scss";

import { useState } from "react";
import TinderCard from "react-tinder-card";

import dinesh from "./images/dinesh.jpeg";
import erlich from "./images/erlich.jpeg";
import jared from "./images/jared.jpeg";
import monica from "./images/monica.jpeg";
import richard from "./images/richard.jpeg";

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

export default function Demo() {
  const [lastDirection, setLastDirection] = useState<Direction>();

  const swiped = (direction: Direction, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };

  return (
    <div id="demo">
      <div>
        <h1>React Tinder Card</h1>
        <div className="cardContainer">
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
        {lastDirection ? (
          <h2 className="infoText">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="infoText" />
        )}
      </div>
    </div>
  );
}
