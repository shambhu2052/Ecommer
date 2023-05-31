import React from "react";

const Maincontainer = () => {
  return (
    <>
      <div className="banner h-[373px] relative">
        <div className="absolute  top-[20%] left-[5%] ">
          <h3 className="font-inter font-normal text-[28px] leading-[34px] text-[#1C1C1C]">
            Latest trending
          </h3>
          <h1 className="font-Inter font-bold text-[32px] leading-[39px] text-[#1C1C1C]">
            Electronic items
          </h1>
          <div className="flex items-center justify-center bg-[white] learnbtn rounded-[6px] w-[119px] h-[40px] cursor-pointer mt-[17px]">
            <h2 className="font-inter font-medium text-base leading-[20px] text-[#1C1C1C]">
              Learn more{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontainer;
