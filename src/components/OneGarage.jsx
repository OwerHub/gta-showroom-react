import CarCard from "./CarCard";
import "../styles/mainStyle.css";

const OneGarage = (props) => {
  return (
    <div
      className=" 
				mb-3 mx-5 mt-4 border-2 border-black
				flex 
        flex-col md:flex-row
				"
    >
      <div
        className="garageID 
				  text-center  w-full md:w-2/12 py-3 px-2 bg-gtaYellow"
      >
        <div className="font-bold ">{props.garageData.aka}</div>
        <div>{props.garageData.name}</div>
        <div
          className="
					text-xs
				"
        >
          {props.garageData.note}
        </div>
      </div>

      <div
        className="
					carWrapper pl-2
					flex flex-wrap  md:justify-start justify-around  w-full  md:w-10/12
					"
      >
        {props.garageData.cars.map((carData, iterator) => {
          return <CarCard carData={carData} key={`cc${iterator}`}></CarCard>;
        })}
      </div>
    </div>
  );
};

export default OneGarage;
