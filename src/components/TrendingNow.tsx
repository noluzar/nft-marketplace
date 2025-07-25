import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

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

const TrendingNow = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(4); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? cards.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      prev >= cards.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-2 text-sm">
        <h1 className="md:text-2xl text-lg font-bold">Trending Now</h1>
        <div className="flex items-center gap-2">
          <MdArrowBackIos
            className="bg-gray-300 p-2 text-3xl rounded hover:bg-black hover:text-white cursor-pointer"
            onClick={handlePrev}
          />
          <MdOutlineArrowForwardIos
            className="bg-gray-300 p-2 text-3xl rounded hover:bg-black hover:text-white cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="md:flex md:gap-2 overflow-hidden">
        {Array.from({ length: visibleCards }).map((_, idx) => {
          const cardIdx = (startIdx + idx) % cards.length;
          const isLast = idx === visibleCards - 1;

          return (
            <div
              key={cardIdx}
              style={{
                minWidth: isLast && visibleCards > 1 ? "150px" : "100%",
                maxWidth: isLast && visibleCards > 1 ? "150px" : "300px",
                opacity: isLast && visibleCards > 1 ? 0.5 : 1,
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
