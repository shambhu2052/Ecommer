"use Client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
const cat = [
  {
    catname: "Mobile accessory",
  },
  {
    catname: "Electronics",
  },

  {
    catname: "Smartphones",
  },
  {
    catname: "Modern tech",
  },
];
const Category = () => {
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
          Category
        </h3>
        <div>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div>
        {show ? (
          <div
            className="flex flex-col mt-[24px] gap-[17px] pb-[20px] anim
        "
          >
            {cat.map((list: any, index: number) => (
              <div key={index} className="">
                <Link
                  href=""
                  className="font-Inter font-normal text-base leading-[20px] "
                >
                  {list.catname}
                </Link>
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

export default Category;
