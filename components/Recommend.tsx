"use client";
import React from "react";
const product3 = [
  {
    img: "/../assets/tshirt.png",
    price: "$10.30",
    title: "T-shirt with multiple color, for men",
  },
  {
    img: "/../assets/jocket.png",
    price: "$10.30",
    title: "Jeans short for men blue color",
  },
  {
    img: "/../assets/coat.png",
    price: "$12.50",
    title: "Brown winter coat medium size",
  },
  {
    img: "/../assets/purse.png",
    price: "$34.00",
    title: "jeans bag for travel for men",
  },
  {
    img: "/../assets/bag.png",
    price: "$99.00",
    title: "Leather wallet ",
  },
  {
    img: "/../assets/paint.png",
    price: "$9.99",
    title: "Canon camera black, 100x zoom",
  },
  {
    img: "/../assets/headset.png",
    price: "$8.99",
    title: "Headset for gaming with mic",
  },
  {
    img: "/../assets/bag.png",
    price: "$10.30",
    title: "Smartwatch silver color modern ",
  },
  {
    img: "/../assets/potter.png",
    price: "$10.30",
    title: "Blue wallet for men leather metarfial",
  },
  {
    img: "/../assets/jug1.png",
    price: "$80.95",
    title: "Jeans bag for travel for men",
  },
];
const Recommend = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[30px]">
        <div className="container mx-auto">
          <h2 className="font-Inter font-semibold text-2xl leading-[32px] tracking-[-0.2px] text-[#1C1C1C]">
            Recommended items
          </h2>
          <div className="grid grid-cols-5 gap-[20px] mt-[24px]">
            {product3.map((items: any, index: number) => (
              <div
                key={index}
                className="w-full h-[310px] bg-[white] border-[1px] border-solid border-[#E0E0E0] px-[10px] py-[9px]"
              >
                <div className="">
                  <img src={items.img} alt="image of product" />
                </div>
                <h4 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C] pt-[24px]">
                  {items.price}
                </h4>
                <p className=" w-[186px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5] pt-[3px]">
                  {items.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
