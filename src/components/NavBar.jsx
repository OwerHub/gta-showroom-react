import "../styles/mainStyle.css";
import "../styles/mainStyle.css";

const NavBar = (props) => {
  return (
    <div
      className="navbar
	 				h-10  md:pl-4
					bg-green-300
					flex justify-around  md:justify-start
					"
    >
      <div className="navButtonsTW " onClick={() => props.setContentPage(1)}>
        <span className="hidden md:block">Cars</span>
        <img
          src={require("../imgs/icons/sedan-car-front.png")}
          alt="carIconPcs"
          className="h-5 md:ml-2 md:hidden"
        />
      </div>
      <div className="navButtonsTW" onClick={() => props.setContentPage(2)}>
        <span className="hidden md:block">Random Car</span>
        <img
          src={require("../imgs/icons/random.png")}
          alt="carIconPcs"
          className="h-5 md:ml-2  md:hidden"
        />
      </div>
      <div className="navButtonsTW" onClick={() => props.setContentPage(3)}>
        <span className="hidden md:block">About</span>
        <img
          src={require("../imgs/icons/info.png")}
          alt="carIconPcs"
          className="h-5 md:ml-2  md:hidden"
        />
      </div>
    </div>
  );
};

export default NavBar;
