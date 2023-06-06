"use client";
import React from "react";
import Link from "next/link";
const product1 = [
  {
    productname: "Smart watches",
    title: "From USD 19",
    img: "/../assets/watch.png",
  },
  {
    productname: "Cameras",
    title: "From USD 89",
    img: "/../assets/camera.png",
  },
  {
    productname: "Headphones",
    title: "From USD 10",
    img: "/../assets/headphone2.png",
  },
  {
    productname: "Smart watches",
    title: "From USD 90",
    img: "/../assets/jug.png",
  },
  {
    productname: "Gaming set",
    title: "From USD 35",
    img: "/../assets/headphone.png",
  },
  {
    productname: "Laptops & PC",
    title: "From USD 340",
    img: "/../assets/laptop.png",
  },
  {
    productname: "Smartphones",
    title: "From USD 19",
    img: "/../assets/mobile2.png",
  },
  {
    productname: "Electric kattle",
    title: "From USD 240",
    img: "/../assets/mobile3.png",
  },
];
const Consumer = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[23px]">
        <div className="container mx-auto flex bg-[#FFFFFF]  border-[1px] border-solid border-[#DEE2E7] rounded-[6px]">
          <div className="basis-[23%] relative banner3 h-[260px]">
            <div className="absolute flex gap-[18px] flex-col top-[10%] left-[10%]">
              <h2 className="font-Inter font-semibold text-xl leading-[26px] tracking-[-0.2px] text-[#1C1C1C]">
                Consumer
                <br /> electronic and <br /> gadgets
              </h2>
              <div className="flex justify-center items-center w-[123px] h-[40px] bg-[white] ">
                <Link
                  href=""
                  className="font-Inter font-medium text-base leading-[20px] text-[#1C1C1C]"
                >
                  Source now
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-[77%]">
            <div className="grid grid-cols-4">
              {product1.map((items: any, index: number) => (
                <div
                  className="w-full h-[130px] pt-[20px] pl-[16px] border-r-[1px] border-b-[1px] border-[solid] border-[#E0E0E0]"
                  key={index}
                >
                  <h3 className="font-Inter font-normal text-base leading-[20px] text-[#1C1C1C]">
                    {items.productname}
                  </h3>
                  <div className="flex justify-between mt-[9px] pr-[5px]">
                    <h5 className="font-Inter font-normal text-[13px] leeading-[16px] text-[#8B96A5] w-[61px]">
                      {items.title}
                    </h5>
                    <div className="w-[70px] h-[70px]">
                      <img
                        src={items.img}
                        alt="image of product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consumer;
