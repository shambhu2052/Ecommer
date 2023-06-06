import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Menu = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] py-[20px]">
        <div className="container mx-auto">
          <div className="flex gap-[13px]">
            <div className="flex gap-[7px] items-center">
              <Link
                href=""
                className="fontInter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]"
              >
                Home
              </Link>
              <IoIosArrowForward className="text-[#8B96A5]" />
            </div>
            <div className="flex gap-[7px] items-center">
              <Link
                href=""
                className="fontInter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]"
              >
                Clothings
              </Link>
              <IoIosArrowForward className="text-[#8B96A5]" />
            </div>
            <div className="flex gap-[7px] items-center">
              <Link
                href=""
                className="fontInter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]"
              >
                Men's wear
              </Link>
              <IoIosArrowForward className="text-[#8B96A5]" />
            </div>
            <div className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]">
              <Link href="">Summer clothing</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
