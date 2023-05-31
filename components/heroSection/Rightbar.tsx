import Link from "next/link";
import React from "react";

const Rightbar = () => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="bg-[#E3F0FF] rounded-[6px] px-[10px] pt-[17px] pb-[12px] flex flex-col gap-[14px] cursor-pointer">
          <div className="flex items-center gap-[9px]">
            <img src="/../assets/user.png" alt="image of user" />
            <h2>
              Hi, user <br /> lets get stated
            </h2>
          </div>
          <div className=" flex items-center justify-center h-[30px] rounded-[6px] join">
            <Link
              href=""
              className="font-inter font-medium text-[13px] leading-[16px] text-[white]"
            >
              Join now
            </Link>
          </div>
          <div className=" flex items-center justify-center h-[30px] bg-[white] rounded-[6px]">
            <Link
              href=""
              className="font-inter font-medium text-[13px] leading-[16px] text-[#0D6EFD]"
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="h-[95px] bg-[#F38332] pt-[16px] pl-[16px] rounded-[6px] cursor-pointer">
          <h4 className="font-Inter font-normal text-base leading-[20px] text-[white]">
            Get US $10 off
            <br /> with a new <br />
            supplier
          </h4>
        </div>
        <div className="h-[95px] bg-[#55BDC3] rounded-[6px] pt-[16px] pl-[16px]">
          <h4 className="font-inter font-normal text-base leading-[20px] text-[white]">
            Send quotes with
            <br /> supplier
            <br /> preferences
          </h4>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
