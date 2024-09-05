import React from "react";

const TitlePage = () => {
  return (
    <div className="container-wrapper relative size-full overflow-clip bg-green-500/0 lg:place-content-center">
      <div className="relative top-[15%] z-10 h-fit bg-red-500/0">
        <div className="flex h-fit font-morganite text-[7rem] leading-none text-underground-yellow xs:text-[9rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] xl:leading-[17rem]">
          FRONT
          <p className="text-underground-silver">-</p>
          END
        </div>
        <div className="relative my-2 h-[2px] w-[75%] bg-underground-silver md:h-[4px] xl:h-[.5rem]"></div>
        <div className="relative flex max-h-fit max-w-[100%] items-center gap-3 font-prestage max-xs:gap-2 md:gap-5">
          <div className="h-fit w-fit basis-1/4 text-nowrap bg-underground-yellow px-1 py-1 text-base tracking-wide xs:text-xl md:text-3xl lg:text-5xl 2xl:text-6xl">
            <p>CHRISTIAN DANIEL PANCHO</p>
          </div>
          <div className="h-fit w-full basis-1/2 text-nowrap text-underground-silver xl:ml-2">
            <p className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              WEB DEVELOPER
            </p>
          </div>
          <div className="absolute bottom-1/2 right-[10.5%] grid h-[50px] w-[30px] translate-y-[1rem] grid-cols-2 grid-rows-3 gap-[.2rem] bg-red-500/0 max-xs:right-[5%] xs:h-[80px] xs:w-[50px] xs:translate-y-[1.5rem] md:h-[250%] md:w-[9%] md:gap-[.3rem] lg:ml-5 lg:translate-y-[2.3rem] xl:h-[250%] xl:gap-[.35rem] 2xl:translate-y-[3rem]">
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-yellow"></div>
            <div className="size-full bg-underground-yellow"></div>
            <div className="size-full bg-underground-yellow"></div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-[11%] z-30 h-[2.5%] w-[40%] bg-red-500 max-xs:right-[7%] max-xs:h-[1%] max-xs:w-[43.7%]"></div> */}
      <div className="absolute bottom-0 z-30 flex h-[2.5%] w-full gap-[.25%]">
        <div className="h-full w-[49%]"></div>
        {/* <div className="h-full w-[1%] bg-cyan-500"></div> */}
        <div className="relative h-full w-[43%] origin-left bg-underground-yellow xs:w-[38%]"></div>
      </div>
      <div className="relative left-[86.5%] top-[15%] z-20 h-full w-[1.5%] bg-underground-yellow max-lg:top-[15%] max-xs:left-[92%] max-xs:h-full"></div>
    </div>
  );
};

export default TitlePage;
