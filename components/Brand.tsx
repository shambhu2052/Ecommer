import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
const Brand = () => {
  return (
    <div className="container mx-auto flex mt-[22px] justify-between items-center mb-[24px]">
      <div className="  flex-basis-[20%]">
        <Link href="/">
          <img src="/../assets/logo.svg" alt="logo of ecommers" />
        </Link>
      </div>
      <div className="flex-basis-[50%]">
        <div className="flex items-center ">
          <div className="border-[1px] border-[solid] border-[#0D6EFD] ">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="w-[421px] h-[40px] pl-[10px] outline-none"
              />
            </form>
          </div>
          <div className=" w-[145px] h-[40px] flex items-center justify-betwen gap-[8px]  border-[1px] border-[solid] border-[#0D6EFD]">
            <h4 className="font-Inter font-normal text-base leading-[19px] text-[#1C1C1C] pl-[10px]">
              All category
            </h4>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex items-center justify-center searchbtn w-[100px] h-[40px] cursor-pointer">
            <div className="font-inter font-medium text-base leading-[19px] text-white">
              Search
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-basis-[30%] ">
        <div className="flex items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[7px] cursor-pointer">
            <FaUserAlt className="text-[#8B96A5] " size={25} />
            <h3 className="font-Inter font-normal text-xs leading-[15px] text-[#8B96A5]">
              Profile
            </h3>
          </div>
          <div className="flex flex-col items-center gap-[7px] cursor-pointer">
            <MdOutlineMessage className="text-[#8B96A5] " size={25} />
            <h3 className="font-Inter font-normal text-xs leading-[15px] text-[#8B96A5]">
              Profile
            </h3>
          </div>
          <div className="flex flex-col items-center gap-[7px] cursor-pointer">
            <BsFillHeartFill className="text-[#8B96A5] " size={25} />
            <h3 className="font-Inter font-normal text-xs leading-[15px] text-[#8B96A5]">
              Profile
            </h3>
          </div>
          <div className="flex flex-col items-center gap-[7px]">
            <HiShoppingCart className="text-[#8B96A5] " size={25} />
            <h3 className="font-Inter font-normal text-xs leading-[15px] text-[#8B96A5]">
              Profile
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
