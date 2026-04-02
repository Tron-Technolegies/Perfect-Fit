import React from "react";
import { FiBox, FiAlertCircle, FiClock, FiTool } from "react-icons/fi";

export default function RentalStats() {
  const stats = [
    {
      title: "Active Rentals",
      value: 86,
      sub: "Currently with customers",
      icon: <FiBox />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Overdue Returns",
      value: 12,
      sub: "5 critical (3+ days)",
      icon: <FiAlertCircle />,
      color: "bg-red-100 text-red-500",
    },
    {
      title: "Upcoming Pickups",
      value: 24,
      sub: "Reserved for next 48h",
      icon: <FiClock />,
      color: "bg-pink-100 text-pink-500",
    },
    {
      title: "Pending Maintenance",
      value: 18,
      sub: "Ready for dry cleaning",
      icon: <FiTool />,
      color: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-4 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl border border-[#00000014] flex justify-between"
        >
          <div>
            <p className="text-sm text-gray-400">{s.title}</p>
            <h2 className="text-2xl font-semibold">{s.value}</h2>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>

          <div className={`p-3 rounded-lg h-fit ${s.color}`}>{s.icon}</div>
        </div>
      ))}
    </div>
  );
}
