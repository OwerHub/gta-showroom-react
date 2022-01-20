import carlistJson from "../datas/garages.json";
import { useState } from "react";

const RandomCar = () => {
  const [isCar, setCar] = useState([]);

  // kiszervezni
  const getAllCars = (garageList) => {
    let carArray = [];

    // temporary solution, while the full car database not exist
    const exeption = (garagesToDelete) => {
      garagesToDelete = garagesToDelete.filter((garage) => garage.aka !== "Extrák");
      return garagesToDelete;
    };

    exeption(garageList).forEach((garage) => {
      carArray = [...carArray, ...garage.cars];
    });
    console.log("all Cars: ", carArray.length);
    return carArray;
  };

  const tryRequire = (incomingURL) => {
    try {
      return require("../imgs/tempCarPics/" + incomingURL + ".png");
    } catch {
      console.log("nincs kép", incomingURL);
      return require("../imgs/CarPlaceholder2.jpg");
    }
  };

  // helyi
  const randomFromList = (list) => {
    const random = Math.floor(Math.random() * list.length - 1);
    return [list[random], random];
    //console.log(random);
  };

  const findCarsGarage = (carName, garageList) => {
    return garageList.find((garage) => {
      return garage.cars.includes(carName);
    });
  };

  const getRandomCar = () => {
    let carlist = getAllCars(carlistJson);

    const [carName, number] = randomFromList(carlist);
    const garageName = findCarsGarage(carName, carlistJson);
    const carPic = tryRequire(carName);
    setCar([carPic, carName, garageName.name]);
  };

  return (
    <div
      className=" randomcar 
					h-full 
					flex flex-col items-center  pt-8
					text-center
					"
    >
      <div
        className=" randomInner
				w-10/12  md:w-1/2 rounded
				bg-gtaYellow 
					py-4
				"
      >
        <div className="font-bold text-2xl ">Random kocsiért</div>
        <div
          className="randomButton
					bg-gtaRed
					w-32 mx-auto my-3 h-12 rounded-lg
					flex justify-center items-center
					uppercase font-bold	tracking-widest text-2xl
					cursor-pointer hover:bg-gtaRed2
						"
          onClick={() => getRandomCar()}
        >
          nyomj
        </div>
        {isCar[1] && (
          <div className="flex flex-col justify-center items-center">
            <div className="my-2">
              <img
                className="
								 md:h-44 
                object-contain hover:scale-125 transition  rounded
								"
                src={isCar[0]}
                alt="CarPictrure"
              />
            </div>
            <div className="carNameInRandom">
              {isCar[1].split("-").map((string, i) => {
                return <div key={`aa${i}`}>{string}</div>;
              })}
            </div>

            <div className="mt-2 font-bold">{isCar[2]}</div>
          </div>
        )}
        {/*   <div className="flex flex-col justify-center items-center">
          <div className="my-2">
            <img
              className="
								h-44 object-contain hover:scale-125 transition  rounded
								"
              src={isCar[0]}
              alt="CarPictrure"
            />
          </div>
          <div className="carNameInRandom">
            {isCar[1].split("-").map((string, i) => {
              return <div key={`aa${i}`}>{string}</div>;
            })}
          </div>

          <div className="mt-2 font-bold">{isCar[2]}</div>
        </div> */}
      </div>
    </div>
  );
};

export default RandomCar;
