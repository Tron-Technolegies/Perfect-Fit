import React from "react";
import { FiTrendingUp, FiTrendingDown, FiDollarSign } from "react-icons/fi";

export default function FinancialStats() {
  const stats = [
    {
      title: "Total Income",
      value: "₹ 4,85,000",
      sub: "+12.5% vs last month",
      icon: <FiTrendingUp />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Expenses",
      value: "₹ 2,10,400",
      sub: "+4.2% vs last month",
      icon: <FiTrendingDown />,
      color: "bg-red-100 text-red-500",
    },
    {
      title: "Net Profit",
      value: "₹ 2,74,600",
      sub: "+65% Margin Healthy",
      icon: <FiDollarSign />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Cash & Bank Balance",
      value: "₹ 5,12,000",
      sub: "Updated today",
      icon: <FiDollarSign />,
      color: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl border border-[#00000014] flex justify-between"
        >
          <div>
            <p className="text-sm text-gray-400">{s.title}</p>
            <h2 className="text-2xl font-semibold mt-1">{s.value}</h2>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>

          <div className={`p-3 rounded-lg h-fit ${s.color}`}>{s.icon}</div>
        </div>
      ))}
    </div>
  );
}
