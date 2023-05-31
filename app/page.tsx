import Brand from "@/components/Brand";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Brand />
      <Navbar />
      <HeroSection />
      <Features />
    </>
  );
}
