import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
const feature = [
  {
    featurename: "Metalic",
  },
  {
    featurename: "Plastic cover",
  },
  {
    featurename: "8GB Ram",
  },
  {
    featurename: "Super power",
  },
  {
    featurename: "Large Memory",
  },
];
const Feature = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="flex justify-between border-t-[1px] border-solid border-[#E0E0E0] pt-[10px]"
        onClick={handleToggle}
      >
        <h3 className="font-Inter font-semibold text-base leading-[20px]">
          Features
        </h3>
        <div>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div>
        {show ? (
          <div className="mt-[23px] flex flex-col gap-[10px] pb-[20px] anim">
            {feature.map((items: any, index: number) => (
              <div key={index} className="">
                <form className="flex gap-[10px] items-center">
                  <input type="checkbox" className="w-[20px] h-[20px]" />
                  <label className="font-Inter font-normal text-[16px] leading-[19.4px] text-[#1C1C1C]">
                    {items.featurename}
                  </label>
                </form>
              </div>
            ))}
            <div className="font-Inter font-normal text-base text-[#0D6EFD] leading-[20px]">
              <Link href="">See all</Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Feature;
