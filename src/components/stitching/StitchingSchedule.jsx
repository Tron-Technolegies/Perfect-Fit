import React from "react";

export default function StitchingSchedule() {
  const data = [
    {
      title: "Trial: Amit Singh",
      sub: "Sherwani • 2:00 PM Today",
    },
    {
      title: "Delivery: Pooja Das",
      sub: "Saree • 5:30 PM Today",
    },
    {
      title: "Trial: Vikram Desai",
      sub: "Jodhpuri Suit • 11:00 AM Tomorrow",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Upcoming Schedule</h3>
        <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">3 Today</span>
      </div>

      <div className="space-y-4">
        {data.map((d, i) => (
          <div key={i} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">{d.title}</p>
              <p className="text-xs text-gray-400">{d.sub}</p>
            </div>

            <button className="text-xs border px-3 py-1 rounded border-[#00000014]">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
