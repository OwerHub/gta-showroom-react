import garageJson from "../datas/garages.json";
import OneGarage from "./OneGarage";
import shortJson from "../datas/short.json";
import { useEffect, useState } from "react";

const ShowRoom = () => {
  const [isGarageList, setGarageList] = useState([]);
  const [isMaxCar, setMaxCar] = useState(0);
  const [isMaxSpace, setMaxSpace] = useState(0)


  // this could be more simle
  const countCar = (garageList) => {
    let allCarsNumber = 0;
    let allSpaceNumber = 0
   /*  garageList.map(
      (garage) => (allCarsNumber = (allCarsNumber + garage.cars.length) | 0)
    ); */

    garageList.forEach(garage => {
      allCarsNumber = allCarsNumber + garage.cars.length;
      allSpaceNumber = allSpaceNumber +garage.space
    });

    return [allCarsNumber , allSpaceNumber ];
  };




  useEffect(() => {
    garageJson.sort((a, b) => (a.order > b.order ? 1 : -1));
    // not best practice, 2x call the function
    setMaxCar(countCar(garageJson)[0]);
    setMaxSpace(countCar(garageJson)[1]);
    console.log(isMaxCar)
    setGarageList(garageJson);
  }, []);

  return (
    <div>
      <div className="h-10 flex justify-center  items-center  text-white ">
        YOU HAVE   
        <span className="mx-2 font-bold  text-lg text-gtaYellow ">
          {isMaxCar} 
          </span> 
          CAR in 
        <span className="mx-2 font-bold  text-lg text-gtaYellow ">
          {isMaxSpace}
        </span>
        SPACE
      </div>
      {isGarageList.map((garage, iterator) => {
        return (
          <OneGarage garageData={garage} key={`og${iterator}`}></OneGarage>
        );
      })}
    </div>
  );
};

export default ShowRoom;
