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

const firstRow = [HTML, CSS, JS, REACT];
const secondRow = [TAILWIND, FRAMER, FIGMA];

const AboutMe = () => {
  return (
    <div className="container-wrapper my-16 flex size-full flex-col gap-5">
      {/* ABOUT ME */}
      <div className="relative flex size-full overflow-hidden rounded-3xl border-2 border-solid border-underground-yellow px-4 py-6 max-xs:h-[60vh] xs:py-8 lg:flex-row lg:place-content-center lg:px-10">
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
          <div className="pl-3 pr-px font-morganite text-7xl">ABOUT ME:</div>
          <div className="basis-full place-content-center pl-3 pr-px font-mulish text-[.85rem] text-underground-silver text-opacity-80">
            Hi there! I'm Christian Daniel Pancho, an eager web developer on a
            self-taught path to mastering the art of coding. My adventure into
            web development began with a simple curiosity about how websites are
            created and has quickly grown into a full-fledged passion.
          </div>
        </div>
      </div>
      {/* EXPERIENCES */}
      <div className="relative flex size-full h-[50vh] flex-col overflow-hidden rounded-3xl border-2 border-solid border-underground-yellow px-4 py-6 font-mulish text-underground-silver text-opacity-80 xs:py-8 lg:flex-row lg:place-content-center lg:px-10">
        <div className="basis-1/2 font-morganite text-7xl text-underground-silver">
          EXPERIENCES:
        </div>
        <div className="flex basis-full flex-col">
          <div className="basis-1/2">
            <p className="text-base">NETWORK ENGINEER</p>
            <p className="text-[.85rem]">Accenture</p>
            <p className="text-[.85rem]">2022-2023</p>
          </div>
          <div className="basis-1/2">
            <p className="text-base">NETWORK ADMINISTRATOR</p>
            <p className="text-[.85rem]">Leekie Enterprise</p>
            <p className="text-[.85rem]">2020-2022</p>
          </div>
        </div>
      </div>
      {/* TECH STACK */}
      <div className="flex size-full flex-col rounded-3xl border-2 border-solid border-underground-yellow px-4 py-6 font-mulish text-underground-silver text-opacity-80 max-xs:h-[60vh] xs:py-8 lg:flex-row lg:place-content-center lg:px-10">
        <p className="basis-1/4 font-morganite text-7xl">CURRENT TECH STACK:</p>
        <div className="flex w-full basis-1/2 items-center justify-center">
          {firstRow.map((image, index) => (
            <div className="basis-1/2 p-3" key={index}>
              <div
                className="h-[80px] w-full"
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
        <div className="flex w-full basis-1/2 justify-center bg-amber-500/0 px-[40px]">
          {secondRow.map((image, index) => (
            <div className="basis-1/2 p-3" key={index}>
              <div
                className="h-[80px] w-full"
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
  );
};

export default AboutMe;
