import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import Primary from "./assets/background/primaryBackground.png";
import About from "./assets/background/aboutMe.svg";
import Title from "./components/TitlePage";
import Project from "./components/ProjectTemplate";
import AboutMe from "./components/AboutMe";
import Data, { Info } from "./components/constants/Data";

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
    <>
      <div
        className="padding-x flex h-full w-full flex-col items-center justify-center bg-red-500 pb-16"
        style={{
          backgroundImage: `url(${Primary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-wrapper flex h-[80vh] w-full max-xs:h-[30vh] xs:max-md:h-[60vh]">
          <Title />
        </div>

        <div className="container-wrapper relative mt-16 h-screen w-full place-content-center max-xs:h-[90vh]">
          <Project
            title={Info.Arshop.title}
            firstSubtitle={Info.Arshop.firstSubtitle}
            secondSubtitle={Info.Arshop.secondSubtitle}
            description={Info.Arshop.description}
            github={Info.Arshop.github}
            web={Info.Arshop.web}
            set1={Data[2]}
            set2={Data[3]}
          />
        </div>
        <div className="container-wrapper relative mt-16 h-screen w-full place-content-center max-xs:h-[90vh]">
          <Project
            title={Info.DOC.title}
            firstSubtitle={Info.DOC.firstSubtitle}
            secondSubtitle={Info.DOC.secondSubtitle}
            description={Info.DOC.description}
            github={Info.DOC.github}
            web={Info.DOC.web}
            set1={Data[0]}
            set2={Data[1]}
          />
        </div>
      </div>
      <div className="relative w-full">
        <div
          className="padding-x absolute right-1/2 top-0 flex w-full translate-x-1/2 justify-center"
          style={{
            backgroundImage: `url("${About}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <AboutMe />
        </div>
      </div>
    </>
  );
}

export default App;
