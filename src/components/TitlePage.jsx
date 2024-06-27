import React from "react";

const TitlePage = () => {
  return (
    <div className="container-wrapper relative size-full">
      <div className="border-draft relative max-lg:top-[15%] max-lg:h-fit lg:place-content-center">
        <div className="flex h-fit font-morganite text-[7rem] leading-none text-underground-yellow xs:text-[9rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] xl:leading-[17rem]">
          FRONT
          <p className="text-underground-silver">-</p>
          END
        </div>
        <div className="my-2 h-[2px] w-[75%] bg-underground-silver md:h-[4px] xl:h-[1%]"></div>
        {/* <div className="relative flex max-h-fit max-w-[100%] items-center bg-lime-500/0 font-prestage max-xs:gap-2 xs:gap-5 xl:gap-10"> */}
        <div className="relative flex max-h-fit max-w-[100%] items-center bg-lime-500/0 font-prestage">
          <div className="h-fit w-fit basis-1/4 text-nowrap bg-underground-yellow px-1 py-1 text-base xs:text-xl md:text-3xl lg:text-5xl 2xl:text-6xl">
            <p>CHRISTIAN DANIEL PANCHO</p>
          </div>
          <div className="ml-2 h-fit w-full basis-1/2 text-nowrap text-underground-silver xs:ml-5 xl:ml-10">
            <p className="text-2xl xs:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl">
              WEB DEVELOPER
            </p>
          </div>
          <div className="relative basis-1/4 place-items-center bg-red-500">
            <div className="absolute bottom-0 left-0 grid h-[50px] w-[30px] translate-y-[1rem] grid-cols-2 grid-rows-3 gap-[.2rem] bg-red-500/0 xs:h-[80px] xs:w-[50px] xs:translate-y-[1.5rem] md:h-[110px] md:gap-[.3rem] lg:ml-5 lg:translate-y-[2.3rem] xl:h-[120px] xl:w-[80px] xl:gap-[.35rem] 2xl:translate-y-[3rem]">
              <div className="size-full bg-underground-silver"></div>
              <div className="size-full bg-underground-silver"></div>
              <div className="size-full bg-underground-silver"></div>
              <div className="size-full bg-underground-yellow"></div>
              <div className="size-full bg-underground-yellow"></div>
              <div className="size-full bg-underground-yellow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
