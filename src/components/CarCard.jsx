import { useEffect, useState } from "react";

const CarCard = (props) => {
  const [isNameArray, setNameArray] = useState([]);
  const [isUrl, setUrl] = useState();

  const [isTry, setTry] = useState();

  const tryRequire = (incomingURL) => {
    try {
      return require(incomingURL);
    } catch {
      console.log("new");
      return require("../imgs/CarPlaceholder2.jpg");
    }
  };

  useEffect(() => {
    setNameArray(props.carData.split("-"));
    tryRequire("albany-franken-stange");

    const proba = "albany-franken-stange";
    setTry(require("../imgs/tempCarPics/" + proba + ".png"));

    setUrl("stange");
    //    setUrl(tryRequire(`../imgs/tempCarPics/${props.carData}.png`));
  }, []);

  return (
    <div
      className="
				carCard 
				m-2 w-1/6 border-2 border-black 
		
		"
    >
      {/*  {isTry && <img src={isTry} alt="sda" />} */}
      <img src={isTry} alt="sda" />
      <img
        src={require(`../imgs/tempCarPics/albany-franken-stange.png`)}
        alt="asdas"
      />
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
