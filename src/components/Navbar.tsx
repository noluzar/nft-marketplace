import { IoCartOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Marketplace");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const headings = ["Marketplace", "Collections", "Earnings"];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-2 md:p-3 text-sm md:text-md bg-white dark:bg-gray-600 dark:text-white shadow-md rounded-full px-4 md:px-8 fixed w-full z-50">
        <div className="md:w-10 w-7">
          <img
          src="/pink.png"
          className="w-full object-cover rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-semibold text-sm">
          {headings.map((opt) => (
            <a
              key={opt}
              href="#"
              className={`${
                selected === opt
                  ? "font-bold md:text-sm bg-gradient-to-r from-[#6853a8] to-pink-300 text-white p-2 rounded-md"
                  : ""
              }`}
              onClick={() => setSelected(opt)}
            >
              {opt}
            </a>
          ))}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded p-1 px-2 text-sm w-64">
          <CiSearch />
          <input
            placeholder="Search collections / accounts"
            className="w-full outline-none bg-transparent dark:text-white"
          />
        </div>

        {/* Hamburger + Right Icons */}
        <div className="flex items-center gap-4">
          {/* Right Icons */}
          <div className="flex items-center space-x-10">
            <div className="hidden md:flex items-center space-x-2 cursor-pointer">
              <img src="/zk.png" className="w-8 h-6 rounded" alt="zkSync" />
              <p>zkSync</p>
              <FaAngleDown size={15} />
            </div>
            <div className="flex items-center space-x-2 text-lg">
              {darkMode ? (
                <FaRegSun
                  className="cursor-pointer hover:text-purple-600"
                  onClick={toggleDarkMode}
                />
              ) : (
                <FaRegMoon
                  className="cursor-pointer hover:text-purple-600"
                  onClick={toggleDarkMode}
                />
              )}
              <IoCartOutline className="cursor-pointer hover:text-purple-600" />
              <IoWalletOutline className="cursor-pointer hover:text-purple-600" />
            </div>
          </div>
          {isOpen ? (
            <FaTimes
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="cursor-pointer md:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 shadow-md p-4 mt-12 mx-2 fixed w-full z-40 text-black dark:text-white">
          <div className="flex flex-col space-y-4 font-semibold">
            {headings.map((opt) => (
              <a
                key={opt}
                href="#"
                className={`${
                  selected === opt
                    ? "font-bold bg-gradient-to-r from-[#6853a8] to-pink-300 text-white p-2 rounded-md"
                    : ""
                }`}
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded p-1 px-2 mt-4 text-sm">
            <CiSearch />
            <input
              placeholder="Search collections / accounts"
              className="w-full outline-none bg-transparent dark:text-white"
            />
          </div>
          <div className="hidden md:flex flex-col mt-4 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src="/zk.png" className="w-8 h-6 rounded" alt="zkSync" />
              <p>zkSync</p>
              <FaAngleDown size={15} />
            </div>
            <div className="flex items-center space-x-4 text-xl">
              {darkMode ? (
                <FaRegSun
                  className="cursor-pointer hover:text-yellow-400"
                  onClick={toggleDarkMode}
                />
              ) : (
                <FaRegMoon
                  className="cursor-pointer hover:text-purple-600"
                  onClick={toggleDarkMode}
                />
              )}
              <IoCartOutline className="cursor-pointer hover:text-purple-600" />
              <IoWalletOutline className="cursor-pointer hover:text-purple-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
