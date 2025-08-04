import { FaEthereum } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface NftPriceProps {
  imageSrc: string;
  name: string;
  verified?: boolean;
  prices: number[];
}

const NftPrice = ({
  imageSrc,
  verified = false,
  name,
  prices,
}: NftPriceProps) => {
  return (
    <div className="flex justify-between bg-white dark:bg-gray-600 shadow p-2 px-4 items-center font-semibold">
      <div className="flex items-center space-x-4">
        <img
          src={imageSrc}
          className="w-10 h-10 rounded object-cover"
          alt={name}
        />
        <p>{name}</p>
        {verified && <MdVerified className="text-blue-600" />}
      </div>
      <div className="flex space-x-40">
        {prices.map((price, idx) => (
          <div
            key={idx}
            className={`md:flex space-x-2 items-center ${
              idx === 0 ? "hidden md:flex" : "flex"
            }`}
          >
            <FaEthereum className="text-gray-700 dark:text-gray-800" />
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftPrice;
