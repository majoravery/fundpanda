import { useGetYumlist } from "api/yumlist";
import { useState } from "react";
import { useParams } from "react-router-dom";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";

import "./FoodDescriptionPage.scss";
import { mapDishIdToImage } from "utils";

const beverageOptions = [
  { value: "one", label: "Special Citron Tea" },
  { value: "two", label: "Green Tea Island Tea" },
  { value: "three", label: "Moonlight island Tea" },
];

const FoodDescriptionPage = () => {
  const { id } = useParams();
  const [beverage, setBeverage] = useState("");
  const [count, setCount] = useState(1);
  const { data } = useGetYumlist({ cid: "sg109sdu" });
  const dish = data?.find(({ dish_id }) => `${dish_id}` === id);

  return (
    <div className="FoodDescriptionPage">
      <div className="imageContainer">
        <img
          className="image"
          src={id ? mapDishIdToImage[id] : ""}
          alt="dish"
        />
      </div>
      <div className="content">
        <div className="header">
          <div className="title">{dish?.dish_name}</div>
          <div className="price">S$ {dish?.price.toFixed(2)}</div>
        </div>
        <div className="subheader">{dish?.dish_description}</div>
        <div className="divider"></div>
        <div className="options">
          <div className="section">
            <div className="title">Choice of beverage</div>
            <div className="subtitle">Select 1</div>
            {beverageOptions.map(({ value, label }) => (
              <div className="radioGroup" key={value}>
                <div className="radio">
                  <label className="radio">
                    <input
                      type="radio"
                      value={value}
                      checked={beverage === value}
                      onChange={() => setBeverage(value)}
                    />
                    {label}
                  </label>
                </div>
                <div className="price">Free</div>
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="section">
            <div className="title">Special instructions</div>
            <div className="subtitle">
              (please let us know if you are allergic to anything or if we need
              to avoid anything.)
            </div>
            <div className="textarea">e.g. no mayo</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="counter">
          <div
            className="minusButton"
            onClick={() => setCount(Math.max(count - 1, 0))}
          >
            <img src={minus} alt="decrease" />
          </div>
          <div className="number">{count}</div>
          <div className="addButton" onClick={() => setCount(count + 1)}>
            <img src={plus} alt="increase" />
          </div>
        </div>
        <div className="addBasketButton">Add to Basket</div>
      </div>
    </div>
  );
};

export default FoodDescriptionPage;
