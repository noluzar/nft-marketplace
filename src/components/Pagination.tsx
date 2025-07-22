// import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex justify-between bg-white p-2 px-4">
        <div className="flex items-center gap-2">
          <MdArrowBackIosNew className="bg-gray-200 p-1" />
            <p>1-3</p>
          <MdOutlineArrowForwardIos />
        </div>
        <div>
        <button className="bg-black text-white text-sm rounded w-20 p-2" name="View All">View All</button>
        </div>
    </div>
  )
}

export default Pagination