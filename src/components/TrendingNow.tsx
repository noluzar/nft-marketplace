import { useState } from "react";
import CardComponent from "./CardComponent";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const cards = [
  {
    imageSrc: "/monsters.jfif",
    title: "Zk Nakamigos",
    verified: true,
    floor: 0.001,
    volume24h: 0.01,
  },
  {
    imageSrc: "/pixel.png",
    title: "Zk Nakamigos",
    verified: false,
    floor: 0.002,
    volume24h: 0.01,
  },
  {
    imageSrc: "/pixel.png",
    title: "Zk Nakamigos",
    verified: false,
    floor: 0.05,
    volume24h: 0.09,
  },
  {
    imageSrc: "/pixel.png",
    title: "Zk Nakamigos",
    verified: true,
    floor: 0.002,
    volume24h: 0.1,
  },
  {
    imageSrc: "/pixel.png",
    title: "Zk Nakamigos",
    verified: true,
    floor: 0.002,
    volume24h: 0.1,
  },
];

const VISIBLE_CARDS = 4;

const TrendingNow = () => {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? cards.length - VISIBLE_CARDS : prev - 1
    );
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      prev >= cards.length - VISIBLE_CARDS ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4 text-sm">
        <h1 className="text-2xl font-bold">Trending Now</h1>
        <div className="flex items-center gap-2">
          <MdArrowBackIos
            className={`bg-gray-300 p-2 text-3xl rounded hover:bg-black hover:text-white cursor-pointer`}
            onClick={handlePrev}
          />
          <MdOutlineArrowForwardIos
            className={`bg-gray-300 p-2 text-3xl rounded hover:bg-black hover:text-white cursor-pointer`}
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: VISIBLE_CARDS + 1 }).map((_, idx) => {
          // Calculate the correct index for looping
          const cardIdx = (startIdx + idx) % cards.length;
          return (
            <div
              key={cardIdx}
              style={{
                minWidth: idx === VISIBLE_CARDS ? "150px" : "300px",
                maxWidth: idx === VISIBLE_CARDS ? "150px" : "300px",
                opacity: idx === VISIBLE_CARDS ? 0.5 : 1,
                transition: "min-width 0.3s, max-width 0.3s, opacity 0.3s",
              }}
            >
              <CardComponent {...cards[cardIdx]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingNow;
