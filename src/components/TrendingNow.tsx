// import React from "react";
import CardComponent from "./CardComponent";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const TrendingNow = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Trending Now</h1>
        <div className="flex items-center space-x-2">
          <MdArrowBackIos />
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <CardComponent
          imageSrc="/pixel.png"
          title="Zk Nakamigos"
          verified={true}
          floor={0.00001}
          volume24h={0.000001}
        />
        <CardComponent
          imageSrc="/pixel.png"
          title="Zk Nakamigos"
          verified={true}
          floor={0.00001}
          volume24h={0.000001}
        />
        <CardComponent
          imageSrc="/pixel.png"
          title="Zk Nakamigos"
          verified={true}
          floor={0.00001}
          volume24h={0.000001}
        />
        <CardComponent
          imageSrc="/pixel.png"
          title="Zk Nakamigos"
          verified={true}
          floor={0.00001}
          volume24h={0.000001}
        />
      </div>
    </div>
  );
};

export default TrendingNow;
