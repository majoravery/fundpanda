import { Pinder } from "api/recommendations";

import "./Card.scss";

type Props = Pinder;

const Card = ({
  dish_name,
  restaurant_name,
  image_url,
  dish_description,
  price,
}: Props) => {
  return (
    <div className="Card">
      <div className="content">
        <div className="title">{dish_name}</div>
        <div className="subtitle">{restaurant_name}</div>
        <div className="description">{dish_description}</div>
        <div className="price">{`S$${price}`}</div>
      </div>
      <div className="image">
        <img src={image_url} alt="dish" />
      </div>
    </div>
  );
};

export default Card;
