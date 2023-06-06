"use client";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
const Subscribe = () => {
  return (
    <>
      <div className="bg-[#EFF2F4] pt-[38px] pb-[39px]">
        <h2 className="font-Inter font-semibold text-xl leading-[28px] tracking-[-0.2px] text-[#1C1C1C] text-center">
          Subscribe on our newsletter
        </h2>
        <p className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#606060] text-center">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex items-center justify-center gap-[8px] mt-[21px]">
          <div className="bg-[#FFFFFF] border-[1px] border-solid border-[#DEE2E7] h-[40px] flex items-center gap-[6px] pl-[10px] rounded-[6px]">
            <MdOutlineMail className="text-[#8B96A5]" size={20} />
            <form>
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full outline-none"
              />
            </form>
          </div>
          <button className="w-[110px] h-[40px] btn rounded-[6px] font-Inter font-medium text-base leading-[20px] text-[#FFFFFF]">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
