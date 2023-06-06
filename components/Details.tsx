import React, { useState } from "react";
import Stock from "./Stock";
const tshirt = [
  {
    id: 1,
    src: "/../assets/t1s.png",
  },
  {
    id: 2,
    src: "/../assets/t2.png",
  },
  {
    id: 3,
    src: "/../assets/t3.png",
  },
  {
    id: 4,
    src: "/../assets/t4.png",
  },
  {
    id: 5,
    src: "/../assets/t5.png",
  },
];
const Details = () => {
  const [imageSrc, setImageSrc] = useState("/../assets/t1s.png");
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <div className=" flex container mx-auto bg-[#FFFFFF] border-[1px] border-solid border-[#DEE2E7] py-[20px] px-[20px] rounded-[6px]">
          <div className=" basis-[30%]">
            <div className="flex justify-center items-center p-[10px] w-full bg-white border-[1px] border-solid border-[#DEE2E7] rounded-[6px]">
              <div className="w-full h-[345px]">
                <img
                  src={imageSrc}
                  alt="photo of t-shirt"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex gap-[17px] mt-[24px]">
              {tshirt.map((items: any, index: number) => (
                <div
                  onClick={() => setImageSrc(items.src)}
                  className={`w-[56px] h-[56px] flex items-center justify-center border-[1px] ${
                    items.src === imageSrc
                      ? "border-[1px] border-[#505050]"
                      : ""
                  } `}
                >
                  <img
                    src={items.src}
                    alt="photo of image"
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="basis-[40%]">
            <Stock />
          </div>
          <div className="basis-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
