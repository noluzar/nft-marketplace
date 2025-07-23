// import React from 'react'
import Trending from "../components/Trending";
import NftPrice from "../components/NftPrice";
import Pagination from "../components/Pagination";

const TopTrending = () => {
  return (
    <div className="w-full space-y-[1px] text-sm">
      <Trending />
      <NftPrice
        imageSrc="/nak.jfif"
        name="Genesis Bored Ape"
        verified={true}
        prices={[0.00001, 0.14]}
      />
      <NftPrice
        imageSrc="/bitcoin.jfif"
        name="Zksync X Bitcoin"
        prices={[0.00001, 0.34]}
      />
      <NftPrice
        imageSrc="/xxx.jfif"
        name="Zk XxX"
        verified={true}
        prices={[0.00001, 0.21]}
      />
      <NftPrice
        imageSrc="/monster.png"
        name="Zk Monsters"
        prices={[0.00001, 0.15]}
      />
      <Pagination />
    </div>
  );
};

export default TopTrending;
