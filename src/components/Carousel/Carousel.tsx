import "./Carousel.css";

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
      <div className="CarouselCard-image">
        <img src="" alt="" />
        <div className="CarouselCard-title">
          <p>{title}</p>
        </div>
        <div className="CarouselCard-info">
          <p className="CarouselCard-pricing">{pricing}</p>
          <p className="CarouselCard-categories">{categories}</p>
        </div>
      </div>
    </div>
  );
};

type CarouselProps = {
  title: string;
};

const Carousel: React.FC<CarouselProps> = ({ title }) => {
  const items: any[] = [];

  return (
    <div className="Carousel">
      <p className="Carousel-title">{title}</p>
      {items.map((item) => (
        <CarouselCard
          title={item.title}
          pricing={item.pricing}
          categories={item.categories}
        />
      ))}
    </div>
  );
};

export default Carousel;
