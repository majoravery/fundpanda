import "./YumlistPage.scss";

import { Pinder } from "api/recommendations";
import { useGetYumlist } from "api/yumlist";
import Card from "components/Card/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FoodSwipeComponent } from "../FoodSwipe/FoodSwipe";
import back from "./assets/back.svg";
import cross from "./assets/cross.svg";

const YumlistPage = () => {
  const { data } = useGetYumlist({ cid: "1111" });
  const [showYumlistItem, setShowYumlistItem] = useState<Pinder | null>(null);
  const navigate = useNavigate();
  console.log(showYumlistItem);

  return (
    <div className="YumlistPage">
      <div className="header">
        <div className="left">
          <div className="back" onClick={() => navigate(-1)}>
            <img src={back} alt="back" />
          </div>
          <div className="text">
            <div className="title">Your Yumlist</div>
            <div className="subtitle">Add them to cart</div>
          </div>
        </div>
      </div>

      <div className="yumlist">
        {data?.map((yumlistItem) => (
          <div
            key={yumlistItem.dish_id}
            className="yumlistItem"
            onClick={() => setShowYumlistItem(yumlistItem)}
          >
            <Card {...yumlistItem} />
          </div>
        ))}
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
              <FoodSwipeComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YumlistPage;
