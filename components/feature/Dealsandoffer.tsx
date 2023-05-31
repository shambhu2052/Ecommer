"use client";
import React from "react";
const time = [
  {
    number: "04",
    day: "Days",
  },
  {
    number: "13",
    day: "Days",
  },
  {
    number: "34",
    day: "Days",
  },
  {
    number: "56",
    day: "Days",
  },
];
const product = [
  {
    img: "/../assets/watch.png",
    name: "Smart Watches",
    discount: "-25%",
  },
  {
    img: "/../assets/laptop.png",
    name: "Laptops",
    discount: "-15%",
  },
  {
    img: "/../assets/camera.png",
    name: "GoPro cameras",
    discount: "-40%",
  },
  {
    img: "/../assets/headphone.png",
    name: "Headphones",
    discount: "-25%",
  },
  {
    img: "/../assets/mobile.png",
    name: "Canon camreras",
    discount: "-25%",
  },
];
const Dealsandoffer = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[30px]">
        <div className="flex container mx-auto bg-[#FFFFFF]  border-[1px] border-solid border-[#DEE2E7] rounded-[6px]">
          <div className="basis-[23%] h-[240px]">
            <div className="pt-[20px] pl-[20px]">
              <h1 className="font-Inter font-semibold text-xl leading-[28px] tracking-[-0.2px] text-[#1C1C1C]">
                Deals and offers
              </h1>
              <h3 className="font-Inter font-medium text-base leading-[20px] text-[#8B96A5]">
                Hygiene equipments
              </h3>
              <div className="flex gap-[6px] mt-[18px]">
                {time.map((b: any, index: number) => (
                  <div
                    key={index}
                    className="flex  w-[45px] h-[50px]  flex-col items-center justify-center bg-[#606060] rounded-[4px]"
                  >
                    <h2 className="font-Inter font-bold text-base leading-[20px] text-white ">
                      {b.number}
                    </h2>
                    <h5 className="font-Inter font-normal text-[12px] leading-[15px] text-[white]">
                      {b.day}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="basis-[77%] flex">
            {product.map((p: any, index: number) => (
              <div className=" w-full flex flex-col items-center justify-center gap-[15px] border-l-[1px] border-solid border-[#E0E0E0] px-[20px] py-[10px]">
                <div className="w-[140px] h-[140px]">
                  <img
                    src={p.img}
                    alt="image of product"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#1C1C1C]">
                  {p.name}
                </h3>
                <div className="flex items-center justify-center w-[61px] h-[28px] bg-[#FFE3E3] rounded-[29px]">
                  <h4 className="font-inter font-normal text-[14px] leading-[17px] tracking-[-0.2px]">
                    {p.discount}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealsandoffer;
