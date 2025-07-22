// import React from 'react'
import { FaEthereum } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface CardComponentProps {
  imageSrc: string;
  title: string;
  verified?: boolean;
  floor: number;
  volume24h: number;
}

const CardComponent = ({
  imageSrc,
  title,
  verified = false,
  floor,
  volume24h,
}: CardComponentProps) => {
  return (
      <div className="w-[350px] bg-white rounded-lg shadow-md p-2 space-y-2">
        <img src={imageSrc} alt={title} className="w-full rounded-md h-40 object-cover" />
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold">{title}</h2>
          {verified && <MdVerified />}
        </div>
        <div>
          <div className="flex justify-between text-gray-600">
            <p>Floor</p>
            <p>24h volume</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaEthereum />
              <p>{floor}</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEthereum />
              <p>{volume24h}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardComponent;
