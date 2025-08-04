// import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex justify-between bg-white dark:bg-gray-600 p-2 px-4 py-4 rounded-b-lg shadow-md">
        <div className="flex items-center gap-2 text-sm">
          <MdArrowBackIosNew className="bg-gray-200 dark:bg-black p-2 rounded text-3xl cursor-pointer hover:bg-black hover:text-white" />
            <p>1 - 3</p>
          <MdOutlineArrowForwardIos className="bg-gray-200 dark:bg-black p-2 rounded text-3xl cursor-pointer hover:bg-black hover:text-white" />
        </div>
        <div>
        <button className="bg-black text-white text-sm rounded w-20 py-1 cursor-pointer" name="View All">View All</button>
        </div>
    </div>
  )
}

export default Pagination