import NavBar from "./NavBar";

const Head = () => {
  return (
    <div
      className="headContainer 
        w-full  h-40  bg-red-500  fixed
        flex flex-col justify-between"
    >
      <div
        className="
        h-full bg-yellow-500
        flex flex-col justify-center 
      "
      >
        <div>
          <div className="font-bold  text-3xl uppercase ">OwerWild GTA SHOWROOM</div>
          <div className="text-sm">0.8 alpha version</div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Head;
