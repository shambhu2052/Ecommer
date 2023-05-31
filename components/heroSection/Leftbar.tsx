import React from "react";

const Leftbar = () => {
  const leftbarItems = [
    "Automobiles",
    "Clothes and Wear",
    "Home interiors",
    "Computer and tech",
    "Tools,equipment",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];
  return (
    <>
      <div className="">
        <div className="">
          <ul className="flex flex-col gap-[11px]">
            {leftbarItems.map((items: any, index: number) => (
              <li
                key={index}
                style={
                  items === "Automobiles"
                    ? {
                        background: "#E5F1FF",
                        fontSize: "20px",
                        color: "black",
                        borderRadius: "6px",
                      }
                    : { background: "" }
                }
                className="hover:bg-[#E5F1FF] hover:text-black font-Inter font-normal text-base leading-[20px] cursor-pointer text-[#505050] pl-[10px] py-[5px] rounded-[6px] "
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
