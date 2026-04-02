import React from "react";

export default function TodaysFittings() {
  const data = [
    {
      name: "Vikram Singh",
      type: "Custom Sherwani - 1st Trial",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      name: "Ayesha Khan",
      type: "Bridal Lehenga - Final Trial",
      time: "02:00 PM",
      status: "Ready",
    },
    {
      name: "Rohan Mehra",
      type: "3-Piece Suit - Measurements",
      time: "04:30 PM",
      status: "Scheduled",
    },
  ];

  const statusColor = {
    Pending: "bg-orange-100 text-orange-500",
    Ready: "bg-green-100 text-green-600",
    Scheduled: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Today's Fittings</h3>
        <span className="text-pink-500 text-sm cursor-pointer">View All</span>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between items-center">
            {/* LEFT */}
            <div className="flex gap-3">
              <div className="bg-[#FFF5F8] w-10 h-10 flex flex-col items-center justify-center px-2 py-1 rounded text-xs text-gray-500 text-center">
                OCT <br /> <span className="text-black font-semibold">24</span>
              </div>

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">{item.type}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-xs text-gray-500 ">{item.time}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${statusColor[item.status]}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
