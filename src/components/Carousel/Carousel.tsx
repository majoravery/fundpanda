import "./Carousel.css";

import favourite from "./assets/favourite.svg";

type CarouselCardProps = {
  title: string;
  pricing: string;
  categories: string;
};

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  pricing,
  categories,
}) => {
  return (
    <div className="CarouselCard">
      <div className="CarouselCard-imageWrap">
        <img
          src="https://dummyimage.com/240x150/aaa"
          alt=""
          className="CarouselCard-image"
        />
        <img src={favourite} alt="" className="CarouselCard-favourite" />
      </div>
      <div className="CarouselCard-title">
        <p>{title}</p>
      </div>
      <div className="CarouselCard-info">
        <p className="CarouselCard-pricing">{pricing}</p>·
        <p className="CarouselCard-categories">{categories}</p>
      </div>
    </div>
  );
};

type CarouselProps = {
  title: string;
};

const Carousel: React.FC<CarouselProps> = ({ title }) => {
  const items: any[] = [
    { title: "Lorem ipsum", pricing: "$", categories: "Mexican, Healthy" },
    { title: "Lorem ipsum", pricing: "$", categories: "Mexican, Healthy" },
  ];

  return (
    <div className="Carousel">
      <p className="Carousel-title">{title}</p>
      <div className="Carousel-cards">
        {items.map((item, index) => (
          <CarouselCard
            key={index}
            title={item.title}
            pricing={item.pricing}
            categories={item.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
