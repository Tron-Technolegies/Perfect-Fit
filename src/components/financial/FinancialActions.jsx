import React, { useState } from "react";
import { FiPlus, FiFileText, FiDownload } from "react-icons/fi";
import AddExpenseModal from "./AddExpenseModal";

export default function FinancialActions() {
  const [open, setOpen] = useState(false);

  const actions = [
    { name: "Add New Expense", icon: <FiPlus />, primary: true },
    { name: "Generate P&L Statement", icon: <FiFileText /> },
    { name: "Export Monthly Data", icon: <FiDownload /> },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-[#00000014]">
      <h3 className="font-semibold mb-4">Finance Actions</h3>

      <div className="space-y-3">
        {actions.map((a, i) => (
          <div
            key={i}
            onClick={() => setOpen(true)}
            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${
              a.primary ? "bg-pink-500 text-white" : "hover:bg-gray-50 border-[#00000014]"
            }`}
          >
            {a.icon}
            <p className="text-sm">{a.name}</p>
          </div>
        ))}
      </div>
      {open && <AddExpenseModal onClose={() => setOpen(false)} />}
    </div>
  );
}
