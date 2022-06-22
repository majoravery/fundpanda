import { Pinder } from "api/recommendations";

import "./Card.scss";

type Props = Pinder;

const Card = ({ dish_name, restaurant_name, image_url }: Props) => {
  return (
    <div className="Card">
      <img className="image" src={image_url} alt="dish" />
      <div className="content">
        <div className="title">{dish_name}</div>
        <div className="subtitle">{restaurant_name}</div>
        <div className="main"></div>
      </div>
    </div>
  );
};

export default Card;
