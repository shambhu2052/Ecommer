import React from "react";
import { GoThreeBars } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div className="border-y-[1px] border-y-[solid] border-y-[#E0E0E0]">
        <div className="container mx-auto flex justify-between py-[22px]">
          <div className="flex gap-[28px] ">
            <div className="flex items-center gap-[9px]">
              <GoThreeBars className="text-[#1C1C1C]" />
              <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                All category
              </h4>
            </div>
            <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
              Hot offers
            </h4>
            <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
              Gift boxes
            </h4>
            <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
              Projects
            </h4>
            <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
              Menu item
            </h4>
            <div className="flex items-center gap-[7px]">
              <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                Help
              </h4>{" "}
              <IoIosArrowDown className="text-[#8B96A5] " />
            </div>
          </div>
          <div className="flex gap-[38px]">
            <div className="flex items-center gap-[8px]">
              <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                English, USD
              </h2>
              <IoIosArrowDown className="text-[#8B96A5]" />
            </div>
            <div className="flex items-center gap-[14px]">
              <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                Ship to
              </h2>
              <img src="/../assets/flag.png" alt="image of flag" />
              <IoIosArrowDown className="text-[#8B96A5]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
