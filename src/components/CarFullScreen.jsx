const CarFullScreen = (props) => {
  const closeFunct = () => {
    props.close();
    console.log("close");
  };

  return (
    <div className="carFullScreen" onClick={() => closeFunct()}>
      <img className="w-96 object-contain  " src={props.carPic} alt="CarPictrure" />
    </div>
  );
};

export default CarFullScreen;
