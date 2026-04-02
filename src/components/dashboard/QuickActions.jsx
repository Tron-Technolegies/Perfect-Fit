import React from "react";
import { FiRotateCcw, FiShoppingBag } from "react-icons/fi";

export default function QuickActions() {
  const actions = [
    { name: "New Order", icon: <FiShoppingBag /> },
    { name: "Receive Return", icon: <FiRotateCcw /> },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000010]">
      <h3 className="text-sm text-gray-400 mb-3 font-semibold">QUICK ACTIONS</h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((a, i) => (
          <div
            key={i}
            className="border border-[#00000010] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#FFF5F8] hover:text-pink-600 cursor-pointer"
          >
            <div className="text-pink-500 hover:text-white">{a.icon}</div>
            <p className="text-sm">{a.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
