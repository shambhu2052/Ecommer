import React from "react";
import Leftbar from "./heroSection/Leftbar";
import Maincontainer from "./heroSection/Maincontainer";
import Rightbar from "./heroSection/Rightbar";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[20px]">
        <div className="container mx-auto bg-[white] border-[1px] border-solid border-[#DEE2E7] rounded-[6px]  py-[20px] px-[14px]">
          <div className="flex gap-[13px]">
            <div className="basis-[20%]">
              <Leftbar />
            </div>
            <div className="basis-[60%]">
              <Maincontainer />
            </div>
            <div className="basis-[20%]">
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
