"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Fotter = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] pb-[60px]">
        <div className="container mx-auto mt-[40px]">
          <div className="flex gap-[61px]">
            <div className="basis-[25%]">
              <Link href="/" className="cursor-pointer">
                <img src="/../assets/logo.svg" alt="logo of brand image" />
              </Link>
              <p className="font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] pt-[18px]">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <div className="flex gap-[12px] mt-[17px]">
                <div className="w-[30px] h-[30px] bg-[#BDC4CD] rounded-[50%] flex items-center justify-center">
                  <Link href="">
                    <FaFacebookF className="text-[#FFFFFF]" />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] bg-[#BDC4CD] rounded-[50%] flex items-center justify-center">
                  <Link href="">
                    <AiOutlineTwitter className="text-[#FFFFFF]" />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] bg-[#BDC4CD] rounded-[50%] flex items-center justify-center">
                  <Link href="">
                    <FaLinkedinIn className="text-[#FFFFFF]" />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] bg-[#BDC4CD] rounded-[50%] flex items-center justify-center">
                  <Link href="">
                    <FaInstagram className="text-[#FFFFFF]" />
                  </Link>
                </div>
                <div className="w-[30px] h-[30px] bg-[#BDC4CD] rounded-[50%] flex items-center justify-center">
                  <Link href="">
                    <FaYoutube className="text-[#FFFFFF]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="basis-[75%]">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                    About
                  </h2>
                  <div className="flex flex-col gap-[10px] mt-[10px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]">
                    <Link href="">About Us</Link>
                    <Link href="">Find Store</Link>
                    <Link href="">Categories</Link>
                    <Link href="">Blogs</Link>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                    Partnership
                  </h2>
                  <div className="flex flex-col gap-[10px] mt-[10px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]">
                    <Link href="">About Us</Link>
                    <Link href="">Find Store</Link>
                    <Link href="">Categories</Link>
                    <Link href="">Blogs</Link>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                    Information
                  </h2>
                  <div className="flex flex-col gap-[10px] mt-[10px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]">
                    <Link href="">Help Center</Link>
                    <Link href="">Money Refund</Link>
                    <Link href="">Shipping</Link>
                    <Link href="">Contact Us</Link>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                    For users
                  </h2>
                  <div className="flex flex-col gap-[10px] mt-[10px] font-Inter font-normal text-base leading-[24px] tracking-[-0.2px] text-[#8B96A5]">
                    <Link href="">Login</Link>
                    <Link href="">Register</Link>
                    <Link href="">Setting</Link>
                    <Link href="">My Orders</Link>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-Inter font-medium text-base leading-[22px] text-[#1C1C1C]">
                    Get app
                  </h2>
                  <div className="flex flex-col mt-[10px] gap-[17px] ">
                    <Link href="">
                      <img
                        src="/../assets/appstore.svg"
                        alt="image of app store"
                      />
                    </Link>
                    <Link href="">
                      <img src="/../assets/googleplay.svg" alt="avatar" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
