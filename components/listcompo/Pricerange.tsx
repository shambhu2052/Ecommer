import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Range from "./Range";
const Pricerange = () => {
  const [show, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="flex justify-between border-t-[1px] border-solid border-[#E0E0E0] pt-[10px] w-full"
        onClick={handleToggle}
      >
        <h3 className="font-Inter font-semibold text-base leading-[20px]">
          Price Range
        </h3>
        <div>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div>
        {show ? (
          <div className="mt-[23px] w-full">
            <Range />
            <div className="flex mt-[20px] gap-[10px]">
              <form>
                <label className="font-Inter font-normal text-base leading-[20px] text-[#1C1C1C]">
                  Min
                </label>
                <br />
                <input
                  type="text"
                  placeholder="0"
                  className="w-full ml-[5px]"
                />
              </form>
              <form>
                <label className="font-Inter font-normal text-base leading-[20px] text-[#1C1C1C]">
                  Max
                </label>
                <br />
                <input type="text" placeholder="999999" className="w-full " />
              </form>
            </div>
            <form>
              <button className=" w-full h-[40px] mt-[8px] bg-[white] font-inter font-medium text-base leading-[20px] text-[#0D6EFD]">
                Apply
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Pricerange;
