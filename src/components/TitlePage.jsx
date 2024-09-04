import React from "react";

const TitlePage = () => {
  return (
    <div className="container-wrapper relative size-full lg:place-content-center">
      <div className="relative z-10 bg-red-500/0 max-lg:top-[15%] max-lg:h-fit">
        <div className="flex h-fit font-morganite text-[7rem] leading-none text-underground-yellow xs:text-[9rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] xl:leading-[17rem]">
          FRONT
          <p className="text-underground-silver">-</p>
          END
        </div>
        <div className="relative my-2 h-[2px] w-[75%] bg-underground-silver md:h-[4px] xl:h-[.5rem]"></div>
        {/* <div className="relative flex max-h-fit max-w-[100%] items-center bg-lime-500/0 font-prestage max-xs:gap-2 xs:gap-5 xl:gap-10"> */}
        <div className="relative flex max-h-fit max-w-[100%] items-center gap-3 font-prestage max-xs:gap-2 md:gap-5">
          <div className="h-fit w-fit basis-1/4 text-nowrap bg-underground-yellow px-1 py-1 text-base tracking-wide xs:text-xl md:text-3xl lg:text-5xl 2xl:text-6xl">
            <p>CHRISTIAN DANIEL PANCHO</p>
          </div>
          {/* <div className="ml-2 h-fit w-full basis-1/2 text-nowrap bg-purple-500 text-underground-silver xs:ml-5 xl:ml-10"> */}
          <div className="h-fit w-full basis-1/2 text-nowrap text-underground-silver xl:ml-2">
            {/* <p className="text-2xl xs:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl"> */}
            <p className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              WEB DEVELOPER
            </p>
          </div>
          {/* <div className="relative size-full basis-1/4 place-items-center border-2 border-solid border-yellow-500"> */}
          {/* <div className="absolute bottom-0 left-0 grid h-[50px] w-[30px] translate-y-[1rem] grid-cols-2 grid-rows-3 gap-[.2rem] border-4 border-solid border-red-500 bg-red-500/0 xs:h-[80px] xs:w-[50px] xs:translate-y-[1.5rem] md:h-[110px] md:w-[80px] md:gap-[.3rem] lg:ml-5 lg:translate-y-[2.3rem] xl:h-[120px] xl:gap-[.35rem] 2xl:translate-y-[3rem]"> */}
          <div className="absolute bottom-1/2 right-[10.5%] grid h-[50px] w-[30px] translate-y-[1rem] grid-cols-2 grid-rows-3 gap-[.2rem] bg-red-500/0 max-xs:right-[5%] xs:h-[80px] xs:w-[50px] xs:translate-y-[1.5rem] md:h-[250%] md:w-[9%] md:gap-[.3rem] lg:ml-5 lg:translate-y-[2.3rem] xl:h-[250%] xl:gap-[.35rem] 2xl:translate-y-[3rem]">
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-silver"></div>
            <div className="size-full bg-underground-yellow"></div>
            <div className="size-full bg-underground-yellow"></div>
            <div className="size-full bg-underground-yellow"></div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-[12%] h-[3%] w-[38.7%] bg-underground-yellow max-xs:right-[7%] max-xs:h-[2%] max-xs:w-[43.7%]"></div> */}
      {/* <div className="absolute bottom-0 right-[12%] h-[25%] w-[1.5%] bg-underground-yellow max-xs:right-[6.3%] max-xs:h-[50%]"></div> */}
      <div className="absolute bottom-0 size-full bg-orange-500"></div>
    </div>
  );
};

export default TitlePage;
