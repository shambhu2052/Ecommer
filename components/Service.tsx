"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { BiBox } from "react-icons/bi";
const product3 = [
  {
    id: "1",
    img: "/../assets/source.png",
    title: "Source from industry Hubs",
  },
  {
    id: "2",
    img: "/../assets/custom.png",
    title: "Customize Your Products",
  },
  {
    id: "3",
    img: "/../assets/Fast.png",
    title: "Fast, reliabble shipping by oceans or air",
  },
  {
    id: "4",
    img: "/../assets/monitor.png",
    title: "Product monitoring and inspection",
  },
];
const Service = () => {
  return (
    <div className="bg-[#F5F5F5] pt-[30px]">
      <div className="container mx-auto">
        <h2 className="font-Inter font-semibold text-[24px] leading-[32px] tracking-[-0.2px] text-[#1C1C1C]">
          Our extra services
        </h2>
        <div className="grid grid-cols-4 gap-[20px] mt-[24px]">
          {product3.map((items: any, index: number) => (
            <div
              key={index}
              className="h-[200px] 2xl:h-[230px] bg-[#FFFFFF] border-[1px] border-solid border-[#E0E0E0] rounded-[6px]"
            >
              <div className="w-full relative">
                <img src={items.img} alt="image of source" className="w-full" />
                <div className=" absolute bottom-[-17%] right-[10%] flex items-center justify-center w-[55px] h-[55px] bg-[#D1E7FF] rounded-[50%] border-[2px] border-solid border-[white]">
                  {items.id === "1" && <AiOutlineSearch size={20} />}
                  {items.id === "2" && <BiBox size={20} />}
                  {items.id === "3" && <MdOutlineSend size={20} />}
                  {items.id === "4" && <MdSecurity size={20} />}
                </div>
              </div>
              <h4 className="w-[200px] font-Inter font-normal text-base leading-[22px] text-[#1C1C1C] pt-[10px] pl-[20px]">
                {items.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
