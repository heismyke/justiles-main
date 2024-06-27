"use client"

import Carousel from "@/components/home/Carousel";
import FeaturedCategory from "@/components/home/FeaturedCategory";



export default function Home() {
  return (
    <main >
        <div className="w-[100%] h-[400px] md:h-[600px] bg-[#5F7161] items-center px-5 lg:px-10  flex">
               <h1 className=" max-w-[500px] sm:max-w-[100%] sm:text-[2.5em ] xl:max-w-[90%] text-[2.5em] leading-[100px] md:text-[4em] md:leading-[150px] lg:text-[5em] lg:max-w-[100%]  xl:text-[6em] 2xl:leading-[180px] 2xl:text-[7em] 2xl:max-w-[100%] font-bold text-[#D0C9C0] text-center md:text-left">indulge yourself in  <span className="text-white ">  ingenuity</span> , let's home speak its <span className="text-white ">attractiveness</span>
       </h1>
      </div>
     <Carousel />
    <FeaturedCategory/>
    </main>
  );
}
  