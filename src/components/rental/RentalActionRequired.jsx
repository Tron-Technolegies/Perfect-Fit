import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function RentalActionRequired() {
  const items = [
    {
      name: "Sanjay Patel",
      item: "Maroon Sherwani",
      sub: "1 day late",
      action: "Remind",
    },
    {
      name: "Ramesh Gupta",
      item: "Tuxedo Suit",
      sub: "3 days late",
      action: "Call",
    },
    {
      name: "Damaged Item Returned",
      item: "Order #RNT-4998",
      sub: "Requires review",
      action: "Review",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Action Required</h3>
        <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">5 Alerts</span>
      </div>

      <div className="space-y-4">
        {items.map((i, idx) => (
          <div key={idx} className="flex justify-between items-start">
            <div className="flex gap-3">
              <FiAlertCircle className="text-red-500 mt-1" />
              <div>
                <p className="text-sm font-medium">{i.name}</p>
                <p className="text-xs text-gray-400">
                  {i.item} • {i.sub}
                </p>
              </div>
            </div>

            <button className="text-xs border px-3 py-1 rounded">{i.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
