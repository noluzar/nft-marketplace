// import React from 'react'
import { FaEthereum } from "react-icons/fa";

interface NftPriceProps {
  imageSrc: string;
  name: string;
  prices: number[];
}

const NftPrice = ({ imageSrc, name, prices }: NftPriceProps) => {
  return (
    <div className="flex justify-between bg-white shadow p-3 items-center">
      <div className="flex items-center space-x-4">
        <img src={imageSrc} className="w-10 h-10 rounded" alt={name} />
        <p>{name}</p>
      </div>
      <div className="flex space-x-33">
        {prices.map((price, idx) => (
          <div key={idx} className="flex space-x-2 items-center">
            <FaEthereum />
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftPrice;
