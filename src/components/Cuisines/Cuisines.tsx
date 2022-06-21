import "./Cuisines.css";

type CuisineCardProps = {
  title: string;
};

const CuisineCard: React.FC<CuisineCardProps> = ({ title }) => {
  return (
    <div className="CuisineCard">
      <div className="CuisineCard-image" />
      <div className="CuisineCard-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

const Cuisines: React.FC = () => {
  const items: any[] = [
    "American",
    "Chinese",
    "Halal",
    "Healthy",
    "Italian",
    "Mexican",
    "Vegetarian",
  ];

  return (
    <div className="Cuisines">
      <p className="Cuisines-title">Cuisines</p>
      <div className="Cuisines-cards">
        {items.map((item) => (
          <CuisineCard title={item} />
        ))}
      </div>
      <div className="Cuisines-cards">
        {items.map((item) => (
          <CuisineCard title={item} />
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
