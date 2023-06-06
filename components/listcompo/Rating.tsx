import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const Rating = () => {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <div
        className="flex justify-between border-t-[1px] border-solid border-[#E0E0E0] pt-[10px] w-full"
        onClick={handleToggle}
      >
        <h3 className="font-Inter font-semibold text-base leading-[20px]">
          Features
        </h3>
        <div>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div>
        {show ? (
          <div className="mt-[23px] w-full">
            <div className="flex flex-col gap-[16px]">
              <form className="flex gap-[13px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <div className="flex">
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                </div>
              </form>
              <form className="flex gap-[13px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <div className="flex">
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                </div>
              </form>
              <form className="flex gap-[13px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <div className="flex">
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                </div>
              </form>
              <form className="flex gap-[13px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <div className="flex">
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#FF9017]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                  <AiFillStar className="text-[#BDC4CD]" />
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Rating;
