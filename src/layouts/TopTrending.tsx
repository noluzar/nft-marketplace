// import React from 'react'
import Trending from "../components/Trending";
import NftPrice from "../components/NftPrice";
import Pagination from "../components/Pagination";

const TopTrending = () => {
  return (
    <div className="w-full space-y-1">
      <Trending />
      <NftPrice
        imageSrc="/pixel.png"
        name="Zk Nakamigos"
        prices={[0.00001, 0.00001]}
      />
      <NftPrice
        imageSrc="/pixel.png"
        name="Zk Nakamigos"
        prices={[0.00001, 0.00001]}
      />
      <NftPrice
        imageSrc="/pixel.png"
        name="Zk Nakamigos"
        prices={[0.00001, 0.00001]}
      />
      <NftPrice
        imageSrc="/pixel.png"
        name="Zk Nakamigos"
        prices={[0.00001, 0.00001]}
      />
      <Pagination />
    </div>
  );
};

export default TopTrending;
