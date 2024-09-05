import React from "react";
import Avatar from "../assets/icons/avatar.svg";
import Github from "../assets/icons/github_gray.svg";
import Linkedin from "../assets/icons/linkedin_gray.svg";
import HTML from "../assets/icons/html_gray.svg";
import CSS from "../assets/icons/css_gray.svg";
import JS from "../assets/icons/javascript_gray.svg";
import REACT from "../assets/icons/react_gray.svg";
import TAILWIND from "../assets/icons/tailwind_gray.svg";
import FRAMER from "../assets/icons/framer_gray.svg";
import FIGMA from "../assets/icons/figma_gray.svg";
import GSAP from "../assets/icons/gsap_gray.svg";

const firstRow = [HTML, CSS, JS, REACT];
const secondRow = [TAILWIND, FRAMER, FIGMA, GSAP];

const AboutMe = () => {
  return (
    <div className="container-wrapper lg:gird my-16 flex size-full flex-col gap-5 lg:grid lg:grid-cols-5 lg:grid-rows-2">
      {/* ABOUT ME */}
      <div className="relative flex size-full overflow-hidden rounded-3xl border-2 border-solid border-underground-yellow bg-underground-blue px-4 py-6 max-xs:h-[60vh] xs:py-8 lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:place-content-center lg:px-6">
        <div className="flex basis-[60%] flex-col items-center justify-center gap-2">
          <div className="flex max-h-[150px] w-full max-w-[150px] justify-center">
            <img src={Avatar} alt="avatar" className="" />
          </div>
          <div className="flex w-full justify-center gap-5">
            <div className="max-h-[25px] max-w-[25px] xs:max-h-[35px] xs:max-w-[35px]">
              <a
                href="https://github.com"
                className="h-full w-1/4 basis-1/4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="github" className="size-full" />
              </a>
            </div>
            <div className="max-h-[25px] max-w-[25px] xs:max-h-[35px] xs:max-w-[35px]">
              <a
                href="https://linkedin.com"
                className="h-full w-1/4 basis-1/4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="linkedin" className="size-full" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex basis-full flex-col text-underground-silver">
          <div className="pl-3 pr-px font-morganite text-7xl md:text-8xl">
            ABOUT ME:
          </div>
          <div className="basis-full place-content-center pl-3 pr-px font-mulish text-[.85rem] text-underground-silver text-opacity-80 lg:pt-2 lg:text-base 2xl:text-lg">
            Hi there! I'm Christian Daniel Pancho, an eager Front-end developer
            on a self-taught path to mastering the art of coding. My adventure
            into web development began with a simple curiosity about how
            websites are created and has quickly grown into a full-fledged
            passion.
          </div>
        </div>
      </div>
      {/* EXPERIENCES */}
      <div className="relative flex size-full h-[50vh] flex-col overflow-hidden rounded-3xl border-2 border-solid border-underground-yellow bg-underground-blue px-10 py-6 font-mulish text-underground-silver text-opacity-80 max-lg:h-fit max-lg:gap-5 xs:py-8 md:px-16 lg:col-span-2 lg:col-start-4 lg:row-span-1 lg:row-start-1 lg:h-full lg:place-content-center lg:px-10">
        <div className="basis-1/2 font-morganite text-7xl text-underground-silver md:text-8xl">
          EXPERIENCES:
        </div>
        <div className="flex basis-full flex-col xs:flex-row lg:flex-col">
          <div className="basis-1/2 xs:place-content-center">
            <p className="text-base lg:text-lg 2xl:text-xl">NETWORK ENGINEER</p>
            <p className="text-[.85rem] lg:text-base 2xl:text-lg">Accenture</p>
            <p className="text-[.85rem] 2xl:text-base">2021-2023</p>
          </div>
          <div className="basis-1/2 xs:place-content-center">
            <p className="text-base lg:text-lg 2xl:text-xl">
              NETWORK ADMINISTRATOR
            </p>
            <p className="text-[.85rem] lg:text-base 2xl:text-lg">
              Leekie Enterprise
            </p>
            <p className="text-[.85rem] 2xl:text-base">2019-2021</p>
          </div>
        </div>
      </div>
      {/* TECH STACK */}
      <div className="flex size-full min-h-[30vh] flex-col justify-center gap-10 rounded-3xl border-2 border-solid border-underground-yellow bg-underground-blue px-4 py-6 font-mulish lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:flex-col lg:place-content-center">
        <p className="basis-1/4 text-center font-morganite text-7xl text-underground-silver md:text-8xl">
          CURRENT TECH STACK:
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex w-full basis-1/2 items-center justify-center gap-5 lg:gap-5">
            {firstRow.map((image, index) => (
              <div
                className="basis-[15%] p-1 xs:basis-[15%] lg:basis-[15%] lg:p-3"
                key={index}
              >
                <div
                  className="h-[80px] w-full opacity-85"
                  style={{
                    backgroundImage: `url("${image}")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex w-full basis-1/2 items-center justify-center gap-5 lg:gap-5">
            {secondRow.map((image, index) => (
              <div
                className="basis-[15%] p-1 xs:basis-[15%] lg:basis-[15%] lg:p-3"
                key={index}
              >
                <div
                  className="h-[80px] w-full opacity-85 transition-all"
                  style={{
                    backgroundImage: `url("${image}")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
