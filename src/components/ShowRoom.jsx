import garageJson from "../datas/garages.json";
import OneGarage from "./OneGarage";
import shortJson from "../datas/short.json";
import { useEffect, useState } from "react";

const ShowRoom = () => {
  const [isGarageList, setGarageList] = useState([]);

  useEffect(() => {
    garageJson.sort((a, b) => (a.order > b.order ? 1 : -1));
    setGarageList(garageJson);
  }, []);

  return (
    <div>
      {isGarageList.map((garage, iterator) => {
        return <OneGarage garageData={garage} key={`og${iterator}`}></OneGarage>;
      })}
    </div>
  );
};

export default ShowRoom;
