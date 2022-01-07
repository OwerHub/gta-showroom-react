import { useEffect, useState } from "react";
import pictureExistVerifier from "../services/pictureExistVerifier";

const CarCard = (props) => {
  const [isNameArray, setNameArray] = useState([]);

  const [isCarPicture, setCarPicture] = useState();

  const tryRequire = (incomingURL) => {
    try {
      return require("../imgs/tempCarPics/" + incomingURL + ".png");
    } catch {
      console.log("nincs kép", incomingURL);
      return require("../imgs/CarPlaceholder2.jpg");
    }
  };

  useEffect(() => {
    setNameArray(props.carData.split("-"));
    setCarPicture(tryRequire(props.carData));
  }, []);

  return (
    <div
      className="
				carCard 
				m-2 w-1/6 border-2 border-black 
		"
    >
      <div
        className="
					m-1 rounded
					imageDiv h-28   bg-black overflow-hidden
					flex justify-center items-center 
					transition ease-in-out ;
					"
      >
        <img
          className="h-28 object-contain hover:scale-150 transition "
          src={isCarPicture}
          alt="CarPictrure"
        />
      </div>
      <div
        className="
				carDataDiv
          bg-gtaYellow
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
