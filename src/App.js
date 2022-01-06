import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Head from "./components/head";
import ShowRoom from "./components/ShowRoom";
import RandomCar from "./components/RandomCar";
import About from "./components/About";

//import TrySticky from "./components/trySticky";

function App() {
  const [isPage, setPage] = useState(1);
  return (
    <div className="App bg-gray-800">
      <Head></Head>
      <NavBar setContentPage={(isPage) => setPage(isPage)}></NavBar>
      <div className="">
        {isPage === 1 && <ShowRoom></ShowRoom>}
        {isPage === 2 && <RandomCar></RandomCar>}
        {isPage === 3 && <About></About>}
      </div>
    </div>
  );
}

export default App;
