import { useEffect, useState } from "react";

const CarCard = (props) => {
  const [isNameArray, setNameArray] = useState([]);

  useEffect(() => {
    setNameArray(props.carData.split("-"));
  }, []);

  const url = "CarPlaceholder2.jpg";

  return (
    <div
      className="
				carCard 
				m-2 w-1/6 border-2 border-black 
		
		"
    >
      <img src={require(`../imgs/${url}`)} alt="" />
      <div
        className="
				carDataDiv
				h-24
				"
      >
        {isNameArray.map((name, iterator) => {
          return <div key={`cd${iterator}`}>{name}</div>;
        })}
      </div>
    </div>
  );
};

export default CarCard;
