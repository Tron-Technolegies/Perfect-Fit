import React from "react";

export default function FinancialDistribution() {
  const data = [
    { name: "Fabric & Materials", percent: 45, amount: "₹94,680" },
    { name: "Payroll & Labor", percent: 30, amount: "₹63,120" },
    { name: "Rent & Utilities", percent: 15, amount: "₹31,560" },
    { name: "Marketing & Others", percent: 10, amount: "₹21,040" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Expense Distribution</h3>
        <span className="text-xs text-gray-400">This Month</span>
      </div>

      <div className="space-y-4">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{d.name}</span>
              <span>{d.percent}%</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded mt-1">
              <div className="bg-pink-500 h-2 rounded" style={{ width: `${d.percent}%` }} />
            </div>

            <p className="text-xs text-gray-400 mt-1">{d.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
