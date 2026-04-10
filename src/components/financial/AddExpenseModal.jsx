import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function AddExpenseModal({ onClose }) {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl border border-[#00000014] overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <h2 className="font-semibold text-lg">Add New Expense</h2>
          <FiX onClick={onClose} className="cursor-pointer text-gray-500" />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5 text-sm">
          {/* DATE */}
          <div>
            <label className="text-xs text-gray-500">
              Date <span className="text-red-500">*</span>
            </label>
            <input className="input mt-1" />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-xs text-gray-500">
              Category <span className="text-red-500">*</span>
            </label>
            <input className="input mt-1" />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-xs text-gray-500">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter expense description..."
              className="input mt-1 h-20 resize-none"
            />
          </div>

          {/* AMOUNT */}
          <div>
            <label className="text-xs text-gray-500">
              Amount (₹) <span className="text-red-500">*</span>
            </label>
            <input placeholder="0.00" className="input mt-1" />
          </div>

          {/* PAYMENT STATUS */}
          <div>
            <label className="text-xs text-gray-500">
              Payment Status <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-6 mt-2">
              {/* PENDING */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Pending"
                  checked={status === "Pending"}
                  onChange={() => setStatus("Pending")}
                  className="cursor-pointer"
                />
                <span className="text-sm">Pending</span>
              </label>

              {/* PAID */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Paid"
                  checked={status === "Paid"}
                  onChange={() => setStatus("Paid")}
                  className="cursor-pointer"
                />
                <span className="text-sm">Paid</span>
              </label>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#00000014]">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#00000014] rounded-lg text-sm cursor-pointer"
          >
            Cancel
          </button>

          <button className="px-5 py-2 bg-pink-500 text-white rounded-lg text-sm cursor-pointer hover:bg-pink-600">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}
