const Head = () => {
  return (
    <div
      className="headContainer 
        w-full  h-40  bg-red-500  text-center
        flex flex-col justify-between"
    >
      <div
        className=" headBackground
        h-full 
        flex flex-col justify-center 
      "
      >
        <div>
          <div className="gtaFont">OwerWild GTA SHOWROOM</div>
          <div className="text-sm  mt-3 text-gtaRed">0.8 alpha version</div>
        </div>
      </div>
      {/*  <NavBar></NavBar> */}
    </div>
  );
};

export default Head;
