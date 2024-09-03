import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Github from "../assets/icons/github.svg";
import Web from "../assets/icons/web.svg";
import WebGray from "../assets/icons/webGray.svg";
import ariesFirst from "../assets/aries_stainless/HeroPage.png";
import ariesSecond from "../assets/aries_stainless/ChooseUsPage.png";
import ariesThird from "../assets/aries_stainless/ChooseUsContent.png";
import ariesFourth from "../assets/aries_stainless/ServicesContent.png";
import ariesFifth from "../assets/aries_stainless/ContactUs.png";

// const arShop = [ariesFirst, ariesSecond, ariesThird, ariesFourth, ariesFifth];
// const arShop1 = [ariesFifth, ariesFourth, ariesThird, ariesSecond, ariesFirst];
const ProjectTemplate = ({
  title,
  firstSubtitle,
  secondSubtitle,
  description,
  github,
  web,
  set1,
  set2,
}) => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end start"],
  });

  const firstHalf = useTransform(scrollYProgress, [0, 0.3, 1], [-150, -75, 5]);
  const secondHalf = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [-50, -105, -190],
  );

  return (
    <div
      className="container-wrapper relative w-full rounded-3xl border-2 border-solid border-underground-yellow max-xs:h-[80vh] xs:h-[90vh] md:h-full"
      ref={divRef}
    >
      <div className="relative flex size-full flex-col overflow-hidden rounded-3xl bg-underground-blue px-8 pb-6 pt-10 xs:py-8 lg:flex-row lg:place-content-center lg:px-10">
        {/* TITLE SECTION */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-3 text-underground-yellow lg:h-full lg:basis-1/2 lg:justify-evenly lg:pr-5">
          <div className="lg:items-left flex w-full items-center gap-5 bg-emerald-500/0 max-lg:flex-col max-lg:gap-1 lg:items-center">
            <div className="lg:justify-left flex w-fit justify-center font-morganite text-6xl tracking-wide max-lg:w-full md:text-8xl lg:text-9xl 2xl:text-[10rem]">
              {title}
            </div>
            <div className="h-[90%] w-[.5%] bg-underground-silver max-lg:h-[.15rem] max-lg:w-1/2 lg:w-[1.5%]"></div>
            <div className="lg:justify-left flex w-full justify-center font-prestage xs:text-xl md:text-3xl lg:flex-col 2xl:text-4xl">
              <div className="lg:hidden">
                {firstSubtitle + " " + secondSubtitle}
              </div>
              <div className="w-full max-lg:hidden">{firstSubtitle}</div>
              <div className="w-full max-lg:hidden">{secondSubtitle}</div>
            </div>
            {/* </div> */}
          </div>
          {/* DESCRIPTION */}
          <div className="font-mulish text-[.85rem] text-underground-silver text-opacity-80 max-lg:text-center md:text-[.9rem] lg:text-base 2xl:text-lg">
            {description}
          </div>
          {/* BUTTONS */}
          <div className="flex h-[40px] w-[45%] items-center gap-2 md:h-[15%] md:w-[35%] lg:h-[10%] lg:w-3/4">
            <a
              className="h-3/4 w-1/2 rounded-md border-2 border-solid border-underground-silver bg-underground-yellow py-px text-black lg:w-[35%]"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="size-full"
                style={{
                  backgroundImage: `url("${Github}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </a>
            <a
              className="h-3/4 w-1/2 rounded-md border-2 border-solid border-underground-yellow bg-start-black py-px text-black lg:w-[35%]"
              href={web}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="size-full"
                style={{
                  backgroundImage: `url("${WebGray}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </a>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="h-3/4 md:h-1/2 lg:h-full lg:basis-1/2">
          <div className="relative flex size-full gap-2 bg-start-blue">
            {/* FIRST HALF */}
            <div className="flex h-[200%] basis-1/2 flex-col items-center overflow-hidden">
              <motion.div
                className="flex size-full flex-col gap-2"
                style={{ y: firstHalf }}
              >
                {set1.map((image, index) => (
                  <div
                    // className="h-[100px] w-full lg:h-[200px]"
                    className="size-full"
                    key={index}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                ))}
              </motion.div>
            </div>
            {/* SECOND HALF */}
            <div className="flex h-[200%] basis-1/2 flex-col items-center overflow-hidden">
              <motion.div
                className="flex size-full flex-col gap-2"
                style={{ y: secondHalf }}
              >
                {set2.map((image, index) => (
                  <div
                    key={index + 1}
                    className="size-full"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                ))}
              </motion.div>
            </div>
            {/* TOP BLUR */}
            <div className="absolute h-1/4 w-full bg-gradient-to-b from-underground-blue via-start-black/80 to-start-black/5"></div>
            {/* BOTTOM BLUR */}
            <div className="absolute bottom-0 h-[10%] w-full bg-gradient-to-t from-underground-blue via-start-black/80 to-start-black/5 max-lg:hidden"></div>
          </div>
        </div>
        {/* TOP */}
        <div className="absolute left-0 top-0 h-[25px] w-full bg-gradient-to-b from-start-black via-start-black to-start-black/10 lg:h-[45px]"></div>
        {/* BOTTOM */}
        <div className="absolute bottom-0 left-0 h-[40px] w-full bg-gradient-to-t from-start-black via-start-black to-start-black/10 lg:h-[60px]"></div>
        {/* LEFT */}
        <div className="absolute left-0 top-0 h-full w-[25px] bg-gradient-to-r from-start-black via-start-black to-start-black/10 lg:w-[35px]"></div>
        {/* RIGHT */}
        <div className="absolute right-0 top-0 h-full w-[25px] bg-gradient-to-l from-start-black via-start-black to-start-black/10 lg:w-[35px]"></div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
