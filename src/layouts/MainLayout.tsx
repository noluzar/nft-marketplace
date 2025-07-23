// import React from 'react'
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import TopTrending from "./TopTrending";
import TrendingNow from "../components/TrendingNow";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="py-2 px-10 space-y-4 ">
         <div className="flex space-x-2">
        <div className="w-[60%]">
        <Carousel />
        </div>
        <div className="w-full">
        <TopTrending />
        </div>
      </div>
      <div>
      <TrendingNow />
      </div>
      </div>
    </div>
  );
};

export default MainLayout;
