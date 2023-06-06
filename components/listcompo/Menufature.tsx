import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const Menufature = () => {
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
          Manufacturer
        </h3>
        <div>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
    </div>
  );
};

export default Menufature;
