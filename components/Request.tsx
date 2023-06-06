"use client";
import React from "react";

const Request = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[30px] ">
        <div className="container mx-auto banner4 h-[446px] px-[40px]  relative">
          <div className="flex gap-[228px] absolute top-[10%]">
            <div className="basis-[50%]">
              <h2 className="font-Inter font-semibold text-[32px] leading-[39px] tracking-[-0.2px] text-white">
                An easy way to send requests to all suppliers
              </h2>
              <p className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-white mt-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className=" basis-[50%] w-full h-[346px] bg-[white] rounded-[6px] pt-[22px] pl-[20px] pr-[31px] form mr-[25px]">
              <h2 className="font-Inter font-semibold text-xl leading-[28px] tracking-[-0.2px] text-[#1C1C1C]">
                Seend quote to suppliers
              </h2>
              <form>
                <input
                  type="text"
                  value="What items you need?"
                  className=" w-full h-[40px] py-[11px] pl-[10px] outline-none border-[1px] border-solid border-[#DEE2E7] rounded-[6px] mt-[18px]"
                />
                <br />
                <textarea
                  className="w-full h-[73px] border-[1px] border-solid border-[#DEE2E7] mt-[20px] pt-[11px] pl-[11px] outline-none"
                  placeholder="Types more details"
                ></textarea>
                <br />
                <div className="flex gap-[10px]">
                  <form>
                    <input
                      type="text"
                      value="Quantity"
                      className="h-[40px] pl-[10px] pt-[5px] border-[1px] border-solid border-[#DEE2E7] mt-[20px] outline-none"
                    />
                  </form>
                  <form>
                    <select className="  w-[111px] h-[40px] pl-[10px] pt-[11px] outline-none border-[1px] border-solid border-[#DEE2E7] mt-[20px]">
                      <option>Pcs</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </form>
                </div>
                <button className="w-[128px] h-[40px] font-Inter font-medium text-base leading-[20px] text-[white] mt-[20px] btn rounded-[6px] ">
                  {" "}
                  Send inquiry{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
