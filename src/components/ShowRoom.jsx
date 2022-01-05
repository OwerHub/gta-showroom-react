import garageJson from "../datas/garages.json";
import OneGarage from "./OneGarage";

const ShowRoom = () => {
  return (
    <div>
      {garageJson.map((garage, iterator) => {
        return <OneGarage garageData={garage} key={`og${iterator}`}></OneGarage>;
      })}
    </div>
  );
};

export default ShowRoom;
