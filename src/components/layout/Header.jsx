import React from "react";
import { FiMapPin, FiCalendar, FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#00000014]">
      {/* LEFT */}
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold text-gray-800 ">Dashboard Overview</h1>
        <div className="border-[#00000014] border h-[20px]"></div>
        <div className="flex items-center gap-2 text-sm text-[#7A2A3F] bg-[#FFF5F8] px-4 py-2 rounded-lg border border-[#00000014] mt-1">
          <FiMapPin />
          Downtown Branch
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FiCalendar />
          Today, Oct 24
        </div>

        <button className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600">
          <FiPlus /> New Order
        </button>
      </div>
    </div>
  );
};

export default Header;
