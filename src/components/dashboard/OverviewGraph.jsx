import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "May", value: 120000 },
  { name: "Jun", value: 150000 },
  { name: "Jul", value: 130000 },
  { name: "Aug", value: 180000 },
  { name: "Sep", value: 160000 },
  { name: "Oct", value: 200000 },
];

export default function OverviewGraph() {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000010]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Revenue & Orders Overview</h3>

        <button className="text-sm border border-[#00000010] bg-[#FFFDFC] px-3 py-1 rounded-md">
          Last 6 Months
        </button>
      </div>

      {/* CHART */}
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#D6336C" fill="#F8BBD0" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
