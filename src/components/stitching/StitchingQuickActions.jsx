import React from "react";
import { FiScissors, FiDollarSign, FiFileText } from "react-icons/fi";

export default function StitchingQuickActions() {
  const actions = [
    { name: "Take Measurements", icon: <FiScissors /> },
    { name: "Record Payment", icon: <FiDollarSign /> },
    { name: "Generate Invoice", icon: <FiFileText /> },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <h3 className="font-semibold mb-4">Quick Actions</h3>

      <div className="space-y-3">
        {actions.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 border border-[#00000014] rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <span className="text-pink-500">{a.icon}</span>
            <p className="text-sm">{a.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
