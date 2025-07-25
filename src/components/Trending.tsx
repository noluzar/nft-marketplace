// import React from 'react'
import NftPrice from "./NftPrice";
import { useState } from "react";

const Trending = () => {
  const [selected, setSelected] = useState("15m");
  const options = ["15m", "1h", "3h", "1d", "7d"]; 
  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-t-lg shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 md:text-xl font-semibold">
            <h2>Top</h2>
            <h2 className="text-gray-600">Trending</h2>
          </div>
          <div className="hidden md:flex items-center  gap-4">
            {options.map((opt) => (
              <a
                key={opt}
                href="#"
                className={selected === opt ? "font-bold md:font-light md:text-sm bg-black text-white p-2 rounded-md" : ""}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="rounded p-2"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-gray-400">
          <div className="flex justify-between">
            <p>Collections</p>
            <div className="flex space-x-40">
              <p className="hidden md:block">Floor Price</p>
              <p>Volume</p>
            </div>
          </div>
        </div>
      </div>
      <NftPrice
        imageSrc="/pixel.png"
        name="Nakamigos"
        prices={[0.00001, 0.11]}
      />
    </div>
  );
};

export default Trending;
