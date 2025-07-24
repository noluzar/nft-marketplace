import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";

const goonImages = [
  "/goon.png",
  "/goon1.jfif",
  "/goon2.jfif",
  "/goon3.jfif",
  "/goon4.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === goonImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  // const prevImage = () => {
  //   setCurrent((prev) => (prev === 0 ? goonImages.length - 1 : prev - 1));
  // };

  const goToImage = (idx: number) => {
    setCurrent(idx);
  };

  return (
      <div className="w-full h-full bg-white p-3 rounded-lg shadow-md">
      <img
        src={goonImages[current]}
        alt={`goon ${current + 1}`}
        className="w-full h-[35vh] rounded-lg mb-2"
      />
      <div>
        <div className="w-full">
          {goonImages.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToImage(idx)}
              style={{
                display: "inline-block",
                width: current === idx ? "12vw" : "12vw",
                height: "7px",
                borderRadius: "7px",
                background: current === idx ? "#6853a8" : "#bbb",
                margin: "0 2vw",
                cursor: "pointer",
                transition: "background 0.3s, width 0.3s",
              }}
            />
          ))}
        </div>
            <div>
              <div className="flex items-center gap-2 py-2">
              <h2 className="font-bold text-xl md:text-2xl">Zorro Gooners</h2>
              <MdVerified className="text-blue-700 text-lg"/>
            </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center md:space-x-10 text-sm w-full">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              placeat, eveniet reprehenderit repudiandae debitis, quasi quas
              autem officia.
            </p>
            <div className="md:w-[40%] w-full">
              <button className="bg-gradient-to-r from-[#6853a8] to-pink-300 p-2 text-white rounded-md hover:bg-purple-700 transition w-full cursor-pointer">
                Explore
              </button> 
            </div>
            </div>
      </div>
    </div>
  );
};

export default Carousel;
