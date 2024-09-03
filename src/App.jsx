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
        className="padding-x flex h-full w-full flex-col items-center justify-center pb-16"
        style={{
          backgroundImage: `url(${Primary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-wrapper flex h-[80vh] w-full max-xs:h-[30vh] xs:max-md:h-[60vh]">
          <Title />
        </div>
        {/* ARSHOP */}
        <div className="container-wrapper relative h-screen w-full place-content-center pt-16 max-xs:h-[90vh] lg:pt-32">
          <div className="absolute left-1/2 top-0 h-full w-[1.5%] -translate-x-1/2 bg-underground-yellow"></div>
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
        {/* DOC */}
        <div className="container-wrapper relative h-screen w-full place-content-center pt-16 max-xs:h-[90vh] lg:pt-40">
          <div className="absolute left-1/2 top-0 h-full w-[1.5%] -translate-x-1/2 bg-underground-yellow"></div>
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
        {/* RSVP */}
        <div className="container-wrapper relative h-screen w-full place-content-center pt-16 max-xs:h-[90vh] lg:pt-40">
          <div className="absolute left-1/2 top-0 h-1/2 w-[1.5%] -translate-x-1/2 bg-underground-yellow lg:h-full"></div>
          <Project
            title={Info.RSVP.title}
            firstSubtitle={Info.RSVP.firstSubtitle}
            secondSubtitle={Info.RSVP.secondSubtitle}
            description={Info.RSVP.description}
            github={Info.RSVP.github}
            web={Info.RSVP.web}
            set1={Data[4]}
            set2={Data[5]}
          />
        </div>
        <div className="relative w-full">
          <div
            className="top-0 flex w-full justify-center"
            // style={{
            //   backgroundImage: `url("${About}")`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // }}
          >
            <AboutMe />
          </div>
        </div>
      </div>
      {/* <div className="relative w-full">
        <div
          className="padding-x absolute right-1/2 top-0 flex w-full translate-x-1/2 justify-center"
          // style={{
          //   backgroundImage: `url("${About}")`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
        >
          <AboutMe />
        </div>
      </div> */}
    </>
  );
}

export default App;
