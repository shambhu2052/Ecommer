"use client";
import Link from "next/link";
import React from "react";
const flag = [
  {
    img: "/../assets/arabic.png",
    countryname: "Arabic Emirates",
    url: "shopname.ae",
  },
  {
    img: "/../assets/Australia.png",
    countryname: "Australia",
    url: "shopname.ae",
  },
  {
    img: "/../assets/united.png",
    countryname: "United States",
    url: "shopname.ae",
  },
  {
    img: "/../assets/russia.png",
    countryname: "Russia",
    url: "shopname.ru",
  },
  {
    img: "/../assets/italy.png",
    countryname: "Italy",
    url: "shopname.it",
  },
  {
    img: "/../assets/denmark.png",
    countryname: "Denmark",
    url: "denmark.com.dk",
  },
  {
    img: "/../assets/france.png",
    countryname: "France",
    url: "shopname.com.fr",
  },
  {
    img: "/../assets/arabic.png",
    countryname: "Arabic Emirates",
    url: "shopname.ae",
  },
  {
    img: "/../assets/china.png",
    countryname: "china",
    url: "shopname.ae",
  },
  {
    img: "/../assets/britain.png",
    countryname: "Great birtain",
    url: "shopname.co.uk",
  },
];
const Suppliers = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[30px] pb-[46px]">
        <div className="container mx-auto">
          <h2 className="font-Inter font-semibold text-2xl leading-[32px] tracking-[-0.2px]">
            Suppliers by region
          </h2>
          <div className="grid grid-cols-5 gap-x-[84px] 2xl:gap-x-[165px] gap-y-[10px] mt-[24px]">
            {flag.map((items: any, index: number) => (
              <div className=" w-full h-full flex gap-[11px] items-center ">
                <div className="w-[30px] h-[30px]">
                  <img
                    src={items.img}
                    alt="image of flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-Inter  font-normal  tracking-[-0.2px]">
                  <h2 className="text-lg leading-[24px] text-[#1C1C1C]">
                    {items.countryname}
                  </h2>
                  <Link
                    href=""
                    className="text-[13px] leading-[16px] text-[#8B96A5]"
                  >
                    {items.url}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
