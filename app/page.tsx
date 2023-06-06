import Brand from "@/components/Brand";
import Features from "@/components/Features";
import Fotter from "@/components/Fotter";
import Fotter1 from "@/components/Fotter1";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Recommend from "@/components/Recommend";
import Request from "@/components/Request";
import Service from "@/components/Service";
import Subscribe from "@/components/Subscribe";
import Suppliers from "@/components/Suppliers";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Brand />
      <Navbar />
      <HeroSection />
      <Features />
      <Request />
      <Recommend />
      <Service />
      <Suppliers />
      <Subscribe />
      <Fotter />
      <Fotter1 />
    </>
  );
}
