import React from "react";
import Link from "next/link";
const product1 = [
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
  {
    productname: "Soft chairs",
    title: "From USD 19px",
    img: "/../assets/chair.png",
  },
];
const Homeandoutdoor = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] pt-[23px]">
        <div className="container mx-auto flex bg-[#FFFFFF]  border-[1px] border-solid border-[#DEE2E7] rounded-[6px]">
          <div className="basis-[23%] relative banner2 h-[260px]">
            <div className="absolute flex gap-[18px] flex-col top-[10%] left-[10%]">
              <h2 className="font-Inter font-semibold text-xl leading-[26px] tracking-[-0.2px] text-[#1C1C1C]">
                Home and <br /> outdoor
              </h2>
              <div className="flex justify-center items-center w-[123px] h-[40px] bg-[white] ">
                <Link
                  href=""
                  className="font-Inter font-medium text-base leading-[20px] text-[#1C1C1C]"
                >
                  Source now
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-[77px]">
            <div className="grid grid-cols-4">
              {product1.map((items: any, index: number) => (
                <div className="" key={index}>
                  <h3 className="font-Inter font-normal text-base leading-[20px] text-[#1C1C1C]">
                    {items.productname}
                  </h3>
                  <div className="flex justify-between">
                    <h5>{}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeandoutdoor;
