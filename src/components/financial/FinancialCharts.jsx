import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "May", income: 200000, expense: 120000 },
  { name: "Jun", income: 250000, expense: 150000 },
  { name: "Jul", income: 300000, expense: 180000 },
  { name: "Aug", income: 320000, expense: 170000 },
  { name: "Sep", income: 380000, expense: 200000 },
  { name: "Oct", income: 420000, expense: 220000 },
];

export default function FinancialChart() {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Income vs Expenses</h3>
        <button className="text-sm border px-3 py-1 rounded">Last 6 Months</button>
      </div>

      <div className="h-[250px]">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="income" fill="#D6336C" />
            <Bar dataKey="expense" fill="#E5E7EB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
