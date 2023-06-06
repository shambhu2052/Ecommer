"use client";
import Brand from "@/components/Brand";
import Details from "@/components/Details";
import Fotter from "@/components/Fotter";
import Fotter1 from "@/components/Fotter1";
import Navbar from "@/components/Navbar";
import Menu from "@/components/listcompo/Menu";
import React from "react";

const page = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <Menu />
      <Details />
      <Fotter />
      <Fotter1 />
    </>
  );
};

export default page;
