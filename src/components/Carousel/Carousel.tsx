import "./Carousel.css";

import { useEffect, useState } from "react";

import favourite from "./assets/favourite.svg";

type CarouselCardProps = {
  title: string;
  pricing: string;
  categories: string;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const useImage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const idx = getRandomInt(10);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./assets/${idx}.jpg`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [idx]);

  return {
    loading,
    error,
    image,
  };
};

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  pricing,
  categories,
}) => {
  const { image } = useImage();
  return (
    <div className="CarouselCard">
      <div className="CarouselCard-imageWrap">
        <img src={image || ""} alt="" className="CarouselCard-image" />
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
