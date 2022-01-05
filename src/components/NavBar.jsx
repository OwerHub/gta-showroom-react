import "../styles/mainStyle.css";

const NavBar = () => {
  return (
    <div
      className="navbar
	 				h-10  pl-4
					bg-green-300
					flex
					"
    >
      <div className=" navButtonsTW tryTexRed"> Cars </div>
      <div className="navButtonsTW">Random Car</div>
      <div className="navButtonsTW">About</div>
    </div>
  );
};

export default NavBar;
