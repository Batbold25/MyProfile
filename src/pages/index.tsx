import React from "react";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
export default function Home() {
  return (
    <div className="bg-black">
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center ">
        <Hero />
        <img src="./Bata2.jpg/" className=" w-11/12 lg:hidden" />
        <img src="./Bata5.png" className=" w-5/12 absolute z-20 top-20 " />
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 px-2">
          Сайн байна уу?
        </h1>
      </div>
      <div className=" w-full p-11 flex flex-col items-center">
        <h1 className=" text-white font-bold text-6xl">About me</h1>
        <AboutMe />
      </div>
    </div>
  );
}
