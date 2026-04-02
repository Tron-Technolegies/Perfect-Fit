import React from "react";
import { LuIndianRupee, LuScissors } from "react-icons/lu";
import { RiTShirt2Line } from "react-icons/ri";
import { RxPeople } from "react-icons/rx";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "1,45,000",
      change: "+12.5%",
      icon: <LuIndianRupee />,
    },
    {
      title: "Active Rentals",
      value: "124",
      extra: "8 overdue",
      icon: <RiTShirt2Line />,
    },
    {
      title: "Stitching Orders",
      value: "45",
      extra: "12 ready",
      icon: <LuScissors />,
    },
    {
      title: "New Customers",
      value: "320",
      change: "+5.4%",
      icon: <RxPeople />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl border border-[#00000010] flex justify-between items-center"
        >
          <div>
            <p className="text-sm text-gray-400">{stat.title}</p>

            <h2 className="text-2xl font-semibold mt-1">₹{stat.value}</h2>

            {stat.change && (
              <p className="text-green-500 text-xs mt-2">↑ {stat.change} from last month</p>
            )}

            {stat.extra && <p className="text-xs mt-2 text-red-500">{stat.extra}</p>}
          </div>

          <div className="bg-[#FFF1F5] text-[#D6336C] p-3 rounded-lg text-lg">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
}
