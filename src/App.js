import { useState } from "react";

import "./App.css";
import Head from "./components/head";
import ShowRoom from "./components/ShowRoom";

function App() {
  const [isPage, setPage] = useState(1);
  return (
    <div className="App">
      <Head></Head>
      <div className="">{isPage === 1 && <ShowRoom></ShowRoom>}</div>
    </div>
  );
}

export default App;
