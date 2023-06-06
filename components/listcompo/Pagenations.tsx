import React, { useState } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
const Pagenations = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="float-right">
      <div className="flex my-[20px] gap-[9px]">
        <div>
          <form>
            <select className="h-[30px] rounded-[6px] w-[115px] font-inter font-normal text-[16px] leading-[20px] text-[#1C1C1C]">
              <option>Show 1</option>
              <option>Show 2</option>
              <option>Show 3</option>
              <option>Show 4</option>
              <option>Show 5</option>
              <option>Show 6</option>
              <option>Show 7</option>
              <option>Show 8</option>
              <option>Show 9</option>
              <option>Show 10</option>
            </select>
          </form>
        </div>
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </div>
  );
};

export default Pagenations;
