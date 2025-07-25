// import React from 'react'
// import { TbWorld } from "react-icons/tb";
import { IoCartOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Marketplace");
  const headings = ["Marketplace", "Collections", "Earnings"];

  return (
    <div>
      <nav className="flex items-center justify-between md:p-4 p-3 text-sm md:text-md bg-white shadow-md rounded-full px-8 fixed w-full">
        <div>Logo</div>
        <div className="flex items-center space-x-10 font-semibold text-sm">
         {headings.map((opt) => (
              <a
                key={opt}
                href="#"
                className={selected === opt ? "font-bold md:text-sm bg-gradient-to-r from-[#6853a8] to-pink-300 text-white p-2 rounded-md" : ""}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </a>
            ))}
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded w-100 p-1 px-2 text-sm">
          <CiSearch />
          <input
            placeholder="Search collections / accounts"
            className="w-full outline-none"
          ></input>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/zk.png" className="w-8 h-6 rounded" />
            <p>zkSync</p>
            <FaAngleDown size={15} />
          </div>
          <div className="flex items-center space-x-2 text-xl">
            {/* <TbWorld className="cursor-pointer hover:text-purple-600" /> */}
            <FaRegMoon className="cursor-pointer hover:text-purple-600" />
            <IoCartOutline className="cursor-pointer hover:text-purple-600" />
            <IoWalletOutline className="cursor-pointer hover:text-purple-600" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
