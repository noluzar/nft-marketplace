// import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoCartOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-full px-8">
        <div>Logo</div>
        <div className="flex items-center space-x-10">
          <a href="#">Marketpace</a>
          <a href="#">Collections</a>
          <a href="#">Earnings</a>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded w-100 p-2">
          <CiSearch />
          <input
            placeholder="Search collections / accounts"
            className="w-full outline-none"
          ></input>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <img src="/zk.png" className="w-8 h-6" />
            <p>zkSync</p>
            <FaAngleDown size={15} />
          </div>
          <div className="flex items-center space-x-2 text-xl">
            <TbWorld />
            <FaRegMoon />
            <IoCartOutline />
            <IoWalletOutline />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
