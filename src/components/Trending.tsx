// import React from 'react'
import NftPrice from "./NftPrice";

const Trending = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-t-lg shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-xl">
            <h2>Top</h2>
            <h2>Trending</h2>
          </div>
          <div className="flex gap-4">
            <a href="#">15m</a>
            <a href="#">1h</a>
            <a href="#">3h</a>
            <a href="#">1d</a>
            <a href="#">7d</a>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Collections</p>
            <div className="flex space-x-40">
              <p>Floor Price</p>
              <p>Volume</p>
            </div>
          </div>
        </div>
      </div>
      <NftPrice
        imageSrc="/pixel.png"
        name="Zk Nakamigos"
        prices={[0.00001, 0.00001]}
      />
    </div>
  );
};

export default Trending;
