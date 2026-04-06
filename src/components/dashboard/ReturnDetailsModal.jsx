import React, { useState } from "react";
import { FiX, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export default function ReturnDetailsModal({ data, onClose, onBack }) {
  const [condition, setCondition] = useState("Excellent");

  const conditions = [
    { name: "Excellent", icon: <FiCheckCircle /> },
    { name: "Good", icon: <FiCheckCircle /> },
    { name: "Damaged", icon: <FiAlertTriangle /> },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 h-screen flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl border border-[#00000014] overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <h2 className="font-semibold text-gray-800">Receive Return</h2>
          <FiX onClick={onClose} className="cursor-pointer text-gray-500" />
        </div>

        <div className="p-6 space-y-5 text-sm">
          {/* SELECTED ORDER */}
          <div className="border border-[#00000014] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-pink-600 font-semibold">{data?.id || "#ORD-9025"}</p>
                <p className="text-gray-700 text-sm">{data?.name || "Neha Kapoor"}</p>
                <p className="text-xs text-gray-400">{data?.item || "Gold Embroidered Sherwani"}</p>
              </div>

              <button onClick={onBack} className="text-xs text-pink-500">
                Change
              </button>
            </div>

            {/* ORDER DETAILS */}
            <div className="grid grid-cols-3 gap-4 mt-4 text-xs text-gray-500">
              <div>
                <p>Rent Amount</p>
                <p className="font-medium text-gray-800">₹4200</p>
              </div>
              <div>
                <p>Security Deposit</p>
                <p className="font-medium text-gray-800">₹6000</p>
              </div>
              <div>
                <p>Return Date</p>
                <p className="font-medium text-gray-800">2026-10-24</p>
              </div>
            </div>
          </div>

          {/* INSPECTION */}
          <div>
            <p className="font-medium mb-2">Inspection Details</p>
            <p className="text-xs text-gray-400 mb-3">Item Condition *</p>

            <div className="grid grid-cols-3 gap-3">
              {conditions.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setCondition(c.name)}
                  className={`border border-[#00000014] rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer transition
                  ${condition === c.name ? "bg-[#FFF5F8] border-pink-300" : "hover:bg-gray-50"}`}
                >
                  <div className="text-gray-400">{c.icon}</div>
                  <p className="text-xs">{c.name}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-2">Requires professional cleaning</p>
          </div>

          {/* CHARGES */}
          <div>
            <p className="font-medium mb-2">Charges & Deductions</p>

            <div className="grid grid-cols-3 gap-3">
              <input placeholder="₹ 0" className="border border-[#00000014] rounded-lg px-3 py-2" />
              <input placeholder="₹ 0" className="border border-[#00000014] rounded-lg px-3 py-2" />
              <input placeholder="₹ 0" className="border border-[#00000014] rounded-lg px-3 py-2" />
            </div>
          </div>

          {/* REFUND */}
          <div className="bg-[#FFF5F8] border border-pink-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Refund Summary</p>

            <div className="flex justify-between text-sm">
              <span>Security Deposit</span>
              <span>₹6000</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="font-medium">Total Refund</span>
              <span className="text-pink-600 font-bold text-lg">₹6000</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#00000014]">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#00000014] rounded-lg text-sm"
          >
            Cancel
          </button>

          <button className="px-4 py-2 bg-gray-300 text-white rounded-lg text-sm cursor-not-allowed">
            Process Return & Refund
          </button>
        </div>
      </div>
    </div>
  );
}
