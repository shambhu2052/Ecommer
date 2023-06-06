import Brand from "@/components/Brand";
import Fotter from "@/components/Fotter";
import Fotter1 from "@/components/Fotter1";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import Itemslist from "@/components/listcompo/Itemslist";

import Menu from "@/components/listcompo/Menu";
import React from "react";

const page = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <Menu />
      <Itemslist />
      <Subscribe />
      <Fotter />
      <Fotter1 />
    </>
  );
};

export default page;
