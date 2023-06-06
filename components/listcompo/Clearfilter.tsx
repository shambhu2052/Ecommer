import React from "react";
import { RxCross2 } from "react-icons/rx";
const filter = [
  {
    filtername: "Samsung",
  },
  {
    filtername: "Apple",
  },
  {
    filtername: "Poco",
  },
  {
    filtername: "Metalic",
  },
  {
    filtername: "4 star",
  },
  {
    filtername: "3 star",
  },
];
const Clearfilter = () => {
  return (
    <div className="my-[20px] flex gap-[8px]">
      {filter.map((items: any, index: number) => (
        <div className="flex items-center gap-[13px] px-[10px] h-[32px] bg-[white] border-[1px] border-solid border-[#0D6EFD] rounded-[6px] cursor-pointer">
          <h3 className="font-Inter font-normal text-base leading-[20px] text-[#505050]">
            {items.filtername}
          </h3>
          <RxCross2 className="text-[#8B96A5]" size={20} />
        </div>
      ))}
      <div className="pt-[5px] font-Inter font-normal text-base leading-[20px] text-[#0D6EFD] cursor-pointer">
        Clear all filter
      </div>
    </div>
  );
};

export default Clearfilter;
