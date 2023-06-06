"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
const Fotter1 = () => {
  return (
    <>
      <div className="bg-[#EFF2F4]">
        <div className="container mx-auto pt-[23px] pb-[21px]">
          <div className="flex justify-between ">
            <div className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#606060]">
              <h2>@ 2023 Ecommerces.</h2>
            </div>
            <div className="flex items-center gap-[6px]">
              <img src="/../assets/amrica.png" alt="avatar" />
              <h5 className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px]">
                English
              </h5>
              <IoIosArrowUp className="text-[#1C1C1C]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter1;
