import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const Stock = () => {
  return (
    <div>
      <div className="flex gap-[5px] items-center w-full">
        <AiOutlineCheck className="text-[#00B517]" />
        <h4 className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#00B517]">
          In stock
        </h4>
      </div>
      <h2 className="pt-[5px] font-Inter font-semibold text-[20px] leading-[28px] tracking-[-0.2px] ">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h2>
      <div className="flex ">
        <div></div>
      </div>
      <div className="flex items-center bg-[#FFF0DF]">
        <div className="flex flex-col gap-[4px] items-center justify-center">
          <h2 className="font-Inter font-semibold text-[18px] leadig-[21px] text-[#FA3434] ">
            $98.00
          </h2>
          <h4 className="font-Inter font-normal text-[13px] leading-[16px] text-[#606060]">
            50-100 pcs
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Stock;
