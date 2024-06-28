import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import primary from "./assets/background/primaryBackground.png";
import Title from "./components/TitlePage";
import ARSHOP from "./components/ARSHOP";
import DOC from "./components/DOC";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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
      <div className="container-wrapper relative w-full max-xs:h-[80vh] xs:h-[90vh] md:h-screen">
        <ARSHOP />
      </div>
      <div className="container-wrapper relative w-full max-xs:h-[80vh] xs:h-[90vh] md:h-screen">
        <DOC />
      </div>
      <div className="container-wrapper relative h-[80vh] w-full max-xs:h-[80vh]"></div>
    </div>
  );
}

export default App;
