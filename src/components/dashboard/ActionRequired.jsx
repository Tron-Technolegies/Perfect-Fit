import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function ActionRequired() {
  const items = [
    {
      title: "Overdue Return: Sherwani S015",
      sub: "Rahul M • Due 2 days ago",
      action: "Review",
    },
    {
      title: "Low Stock: Gold Zari Thread",
      sub: "Only 2 spools remaining",
      action: "Order",
    },
    {
      title: "Fitting Missed: O-8922",
      sub: "Priya S • Yesterday",
      action: "Contact",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Action Required</h3>
        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">3 Alerts</span>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-start gap-3">
            <div className="flex gap-3">
              <div className="text-red-500 my-auto p-1 rounded bg-[#FFEBEB] items-center ">
                <FiAlertCircle />
              </div>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
            </div>

            <button className="text-xs px-3 py-1 border border-[#00000014] rounded-md hover:bg-gray-50">
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
