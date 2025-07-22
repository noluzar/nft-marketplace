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
    <div className="p-4">
      <div className="w-full bg-white p-4 rounded-xl shadow-md">
      <img
        src={goonImages[current]}
        alt={`goon ${current + 1}`}
        className="w-full h-[70vh] object-cover rounded-lg mb-4"
      />
      <div>
        <div className="w-full">
          {goonImages.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToImage(idx)}
              style={{
                display: "inline-block",
                width: current === idx ? "100px" : "80px",
                height: "14px",
                borderRadius: "7px",
                background: current === idx ? "#9c54b5" : "#bbb",
                margin: "0 8px",
                cursor: "pointer",
                transition: "background 0.3s, width 0.3s",
              }}
            />
          ))}
        </div>
        <div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-2xl">Zorro Gooners</h2>
              <MdVerified />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              placeat, eveniet reprehenderit repudiandae debitis, quasi quas
              autem officia, nostrum vel harum nobis iusto repellendus voluptate
              sequi perspiciatis hic quidem incidunt.
            </p>
          </div>
          button
        </div>
      </div>
    </div>
     </div>
  );
};

export default Carousel;
