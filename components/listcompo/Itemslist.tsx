"use client";

import React, { useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Category from "./Category";
import Brands from "./Brands";
import Feature from "./Feature";
import Pricerange from "./Pricerange";
import Condition from "./Condition";
import Rating from "./Rating";
import Pagenations from "./Pagenations";
import Clearfilter from "./Clearfilter";
const listitem = [
  {
    productname: "Canon Cmera Eos 20000,Black 10x zoom",
    img: "/../assets/mobile3.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
  {
    productname: "GoPro HERO6 4K Action Camera- Black",
    img: "/../assets/mobile.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
  {
    productname: "GoPro HERO6 4K Action Camera- Black",
    img: "/../assets/mobile2.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
  {
    productname: "GoPro HERO6 4K Action Camera- Black",
    img: "/../assets/laptop.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
  {
    productname: "GoPro HERO6 4K Action Camera- Black",
    img: "/../assets/watch.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
  {
    productname: "GoPro HERO6 4K Action Camera- Black",
    img: "/../assets/headphone2.png",
    price: "$998.00",
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempro incididunt ut laborer et dolore magna alique",
  },
];
const Itemslist = () => {
  const [showgrid, setShowgrid] = useState(false);
  const handleclick = () => {
    setShowgrid(!showgrid);
  };
  return (
    <>
      <div className="bg-[#F5F5F5] ">
        <div className="container mx-auto">
          <div className="flex gap-[20px]">
            <div className="basis-[20%] ">
              <Category />
              <Brands />
              <Feature />
              <Pricerange />
              <Condition />
              <Rating />
            </div>
            <div className=" basis-[80%] ">
              <div className="flex gap-[296px] h-[62px] border-[1px] border-solid border-[#DEE2E7] rounded-[6px] bg-[white] pl-[19px] pt-[20px] pr-[11px] pb-[31px]">
                <div className="basis-[50%]">
                  <form>
                    <input
                      type="text"
                      value="12,911 items in Mobile accessory"
                      className="w-full "
                    />
                  </form>
                </div>
                <div className="basis-[50%] flex justify-between">
                  <form>
                    <input type="checkbox" className="w-[20px] h-[15px]" />
                    <label className="font-Inter font-normal text-base leading-[20px] pl-[10px]">
                      Verified only
                    </label>
                    <select className="ml-[20px] w-[172px] h-[40px]  pl-[10px] pt-[11px] outline-none border-[1px] border-solid border-[#DEE2E7]">
                      <option>Featured</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </form>
                  <div className="flex">
                    <div
                      className="w-[38px] h-[40px] bg-[#DEE2E7] border-[1px] border-solid border-[#DEE2E7] flex items-center justify-center "
                      onClick={handleclick}
                    >
                      <Link href="#">
                        {" "}
                        <RiLayoutGridFill />
                      </Link>
                    </div>
                    <div className="w-[38px] h-[40px] bg-[#FFFFFF] flex items-center justify-center border-[1px] border-solid border-[#DEE2E7]">
                      <Link href="#">
                        <FaBars />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>{showgrid ? <Clearfilter /> : ""}</div>

              <div
                className={`grid ${showgrid ? "grid-cols-3" : "grid-cols-1"}`}
              >
                {listitem.map((items: any, index: number) => (
                  <div
                    key={index}
                    className={` flex ${
                      showgrid ? "flex-col" : "flex-row"
                    } bg-[white] w-full gap-[24px] pb-[31px] pl-[13px] pt-[12px] pr-[20px] mt-[10px] border-[1px] border-solid border-[#DEE2E7] rounded-[6px]`}
                  >
                    <div className="w-[184px] h-[184px]">
                      <img
                        src={items.img}
                        alt="image of product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-center w-full">
                        <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                          {items.productname}
                        </h2>
                        <div className="w-[40px] h-[40px] bg-[white] border-[1px] border-solid border-[#DEE2E7] flex items-center justify-center heart">
                          <AiOutlineHeart className="text-[#0D6EFD]" />
                        </div>
                      </div>
                      <h3 className="pt-[16px] font-Inter font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-[#1C1C1C]">
                        {items.price}
                      </h3>
                      <div className="flex mt-[5px] items-center">
                        <div className="flex">
                          <AiFillStar className="text-[#FF9017]" />
                          <AiFillStar className="text-[#FF9017]" />
                          <AiFillStar className="text-[#FF9017]" />
                          <AiFillStar className="text-[#FF9017]" />
                          <AiFillStar className="text-[#D4CDC5]" />
                          <h3 className="pl-[6px] font-Inter font-normal text-base leading-[20px] text-[#FF9017]">
                            7.5
                          </h3>
                        </div>
                        <div
                          className={`${
                            showgrid ? "hidden" : "flex gap-[5px] items-center"
                          }`}
                        >
                          <BsDot className="text-[#DEE2E7]" size={25} />
                          <h4 className="font-Inter font-normal text-base leading-[20px] text-[#8B96A5]">
                            154 orders
                          </h4>
                          <BsDot className="text-[#DEE2E7]" size={25} />
                          <h4 className="font-Inter font-normal text-base leading-[20px] text-[#00B517]">
                            Free Shipping
                          </h4>
                        </div>
                      </div>
                      <p className="pt-[15px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#505050]">
                        {items.dis}
                      </p>
                      <Link
                        href=""
                        className={`${
                          showgrid
                            ? "hidden"
                            : "mt-[8px] font-Inter font-medium text-base leading-[19.36px] text-[#0D6EFD]"
                        } `}
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Pagenations />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemslist;
