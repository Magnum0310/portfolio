import { useState } from "react";
import "./App.css";
import primary from "./assets/background/primaryBackground.png";
import Title from "./components/TitlePage";
import ARSHOP from "./components/ARSHOP";

function App() {
  return (
    <div
      className="padding-x flex h-full w-full flex-col items-center justify-center bg-red-500"
      style={{
        backgroundImage: `url(${primary})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-wrapper flex h-[80vh] w-full max-xs:h-[40vh]">
        <Title />
      </div>
      <div className="container-wrapper relative w-full max-xs:h-[70vh]">
        <ARSHOP />
      </div>
    </div>
  );
}

export default App;
