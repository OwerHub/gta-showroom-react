import { useEffect, useState } from "react";
import pictureExistVerifier from "../services/pictureExistVerifier";
import CarFullScreen from "./CarFullScreen";

const CarCard = (props) => {
  const [isNameArray, setNameArray] = useState([]);
  const [isModal, setModal] = useState(false);
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

  console.log("ismodal is: ", isModal);

  return (
    <div
      className="
				carCard 
				mt-8 xs:mt-2    m-2 w-5/6 xs:w-1/6 border-2 border-black  rounded overflow-hidden bg-black

		"
    >
      <div
        /*  onClick={() => setModal(true)} */
        className="
					m-0.5 rounded
					imageDiv xs:h-28   bg-black overflow-hidden
					flex justify-center items-center 
					transition ease-in-out ;
					"
      >
        {isModal && (
          <CarFullScreen
            carPic={isCarPicture}
            close={() => setModal(false)}
          ></CarFullScreen>
        )}

        <img
          className="xs:h-28 object-contain hover:scale-150 transition "
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
